<template>
  <header class="mdn-header">
    <div class="header-inner">
      <!-- 좌측: 모바일 메뉴 + 로고 + 테마 토글 -->
      <div class="header-left">
        <!-- Mobile Menu Toggle -->
        <button
          class="mobile-menu-btn"
          @click="toggleSidebar"
          aria-label="메뉴 열기/닫기"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Logo -->
        <router-link to="/" class="logo">
          <span class="logo-icon">💾</span>
          <span class="logo-text">DoCode</span>
        </router-link>

        <!-- Theme Toggle -->
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :aria-label="isDark ? '라이트 모드로 전환' : '다크 모드로 전환'"
        >
          <svg v-if="!isDark" class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
          </svg>
          <svg v-else class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
        </button>
      </div>

      <!-- 우측: 검색바 + 로그인/로그아웃 -->
      <div class="header-right">
        <!-- Search Bar -->
        <div class="search-wrapper">
          <div class="search-box">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input
              type="text"
              class="search-input"
              placeholder="검색..."
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
          </div>
        </div>

        <!-- 로그인/로그아웃 버튼 -->
        <button v-if="!isLoggedIn" class="auth-btn login-btn" @click="handleLogin">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
          </svg>
          <span class="auth-btn-text">로그인</span>
        </button>

        <button v-else class="auth-btn logout-btn" @click="handleLogout">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span class="auth-btn-text">로그아웃</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/config'

const emit = defineEmits(['toggle-sidebar'])
const router = useRouter()

const searchQuery = ref('')
const isDark = ref(false)
const isLoggedIn = ref(false)

onMounted(() => {
  // Check saved theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
  }

  // 인증 상태 감지
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
  })
})

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('검색:', searchQuery.value)
    // TODO: Implement search functionality
  }
}

const handleLogin = () => {
  router.push('/login')
}

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>

<style lang="scss" scoped>
.mdn-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.header-inner {
  height: 100%;
  max-width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 769px) {
    padding: 0 1.5rem;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }

  @media (min-width: 769px) {
    display: none;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    color: var(--color-accent);

    .logo-icon {
      transform: rotate(-10deg) scale(1.1);
    }
  }

  @media (max-width: 480px) {
    .logo-text {
      display: none;
    }
  }
}

.logo-icon {
  font-size: 1.5rem;
  transition: transform 0.2s;
}

.search-wrapper {
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  transition: all 0.2s;

  &:focus-within {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 96, 223, 0.1);
  }
}

.search-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  margin-right: 0.5rem;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text-primary);
  font-size: 0.875rem;
  padding: 0;

  &::placeholder {
    color: var(--color-text-tertiary);
  }
}


.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }
}

.theme-icon {
  transition: transform 0.2s;

  .theme-toggle:hover & {
    transform: rotate(20deg);
  }
}

.auth-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 640px) {
    .auth-btn-text {
      display: none;
    }
    padding: 0.5rem;
  }
}

.login-btn {
  &:hover {
    border-color: var(--color-accent);
    background-color: rgba(0, 96, 223, 0.1);
    color: var(--color-accent);
  }
}

.logout-btn {
  &:hover {
    border-color: #e53e3e;
    background-color: rgba(229, 62, 62, 0.1);
    color: #e53e3e;
  }
}
</style>
