<template>
  <div class="app">
    <Header />
    <div class="container">
      <Sidebar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
    <WelcomeModal />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import WelcomeModal from './components/WelcomeModal.vue'
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .main-content {
    padding: 1rem;
  }
}
</style>
