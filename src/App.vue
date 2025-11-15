<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <WelcomeModal />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import WelcomeModal from './components/WelcomeModal.vue'
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f9fafb;
}

.main-content {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>
