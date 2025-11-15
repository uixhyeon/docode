<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <router-link to="/">
          <span class="logo-icon">💾</span>
          <span class="logo-text">코드카이브</span>
        </router-link>
      </div>

      <div class="subtitle">
        개인 학습용 코드 아카이브
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  background-color: $bg-primary;
  border-bottom: 1px solid $border-color;
  position: sticky;
  top: 0;
  z-index: $z-index-header;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
}

.header-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-lg;
}

.logo {
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    color: $text-primary;
    font-weight: 700;
    font-size: $font-size-xl;
    text-decoration: none;
    transition: $transition-base;

    &:hover {
      color: $primary-color;

      .logo-icon {
        transform: rotate(-10deg) scale(1.1);
      }
    }
  }

  .logo-icon {
    font-size: 2rem;
    transition: transform 0.2s;
  }
}

.subtitle {
  color: $text-secondary;
  font-size: $font-size-sm;
  font-weight: 500;

  @media (max-width: $breakpoint-md) {
    display: none;
  }
}
</style>
