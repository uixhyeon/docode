<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">💾</span>
        <span class="logo-text">코드카이브</span>
      </router-link>

      <div class="nav-links">
        <router-link
          v-for="category in categories"
          :key="category.path"
          :to="category.path"
          class="nav-link"
          active-class="active"
        >
          <span class="nav-icon">{{ category.icon }}</span>
          <span class="nav-text">{{ category.name }}</span>
        </router-link>
      </div>

      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <router-link
        v-for="category in categories"
        :key="category.path"
        :to="category.path"
        class="mobile-nav-link"
        @click="closeMobileMenu"
      >
        <span class="nav-icon">{{ category.icon }}</span>
        <span class="nav-text">{{ category.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const categories = [
  {
    name: '과목/프레임워크',
    icon: '📚',
    path: '/subjects'
  },
  {
    name: 'UI/기능 구현',
    icon: '🎨',
    path: '/ui-features'
  },
  {
    name: '기능 개발',
    icon: '🔧',
    path: '/development'
  },
  {
    name: '기타',
    icon: '🗂️',
    path: '/others'
  }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.navbar {
  background: white;
  border-bottom: 2px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.navbar-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  text-decoration: none;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    color: #087ea4;

    .logo-icon {
      transform: rotate(-10deg) scale(1.1);
    }
  }
}

.logo-icon {
  font-size: 1.75rem;
  transition: transform 0.2s;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }

  &.active {
    background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
    color: white;
    box-shadow: 0 2px 8px rgba(8, 126, 164, 0.3);
  }
}

.nav-icon {
  font-size: 1.125rem;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: #1f2937;
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  background: white;

  @media (max-width: 768px) {
    display: flex;
  }
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;

  &:hover,
  &.active {
    background: #f3f4f6;
    color: #1f2937;
  }
}
</style>
