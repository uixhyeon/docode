<template>
  <div class="app">
    <MDNHeader @toggle-sidebar="toggleSidebar" />
    <MDNSidebar :is-open="isSidebarOpen" />

    <main class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>

    <!-- Mobile Overlay -->
    <div
      v-if="isSidebarOpen"
      class="sidebar-overlay"
      @click="closeSidebar"
    ></div>

    <!-- Toast 알림 -->
    <Toast
      :isVisible="toastState.isVisible"
      :message="toastState.message"
      :type="toastState.type"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MDNHeader from './components/MDNHeader.vue'
import MDNSidebar from './components/MDNSidebar.vue'
import Toast from './components/Toast.vue'
import { useToast } from './composables/useToast'

const isSidebarOpen = ref(false)
const { toastState } = useToast()

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  transition: background-color 0.3s, color 0.3s;
}

.main-content {
  margin-top: var(--header-height);
  margin-left: 0;
  flex: 1;
  width: 100%;
  min-height: calc(100vh - var(--header-height));

  @media (min-width: 769px) {
    margin-left: var(--sidebar-width);
    width: calc(100% - var(--sidebar-width));
  }
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media (min-width: 769px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem;
  }
}

.sidebar-overlay {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 85;
  display: none;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  @media (max-width: 768px) {
    display: block;
  }
}
</style>
