<template>
  <header class="header">
    <div class="header-inner">
      <!-- 좌측: 로고 + 흑백전환 버튼 -->
      <div class="header-left">
        <div class="logo">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path fill="#087ea4" d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 25.2A11.2 11.2 0 1127.2 16 11.2 11.2 0 0116 27.2z"/>
              <circle cx="16" cy="16" r="6" fill="#087ea4"/>
            </svg>
            <span class="logo-text">DoCode</span>
          </a>
        </div>

        <button class="theme-toggle" @click="toggleTheme">
          <svg v-if="!isDark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
          <svg v-else width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>

      <!-- 우측: 검색바 + 로그인/로그아웃 버튼 -->
      <div class="header-right">
        <div class="search-bar">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            v-model="searchQuery"
            @keyup.enter="handleSearch"
          />
        </div>

        <!-- 로그인 상태에 따라 버튼 표시 -->
        <button v-if="!isLoggedIn" class="login-btn" @click="handleLogin">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
          </svg>
          <span>로그인</span>
        </button>

        <button v-else class="logout-btn" @click="handleLogout">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span>로그아웃</span>
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

const router = useRouter()
const isDark = ref(false)
const isLoggedIn = ref(false)
const searchQuery = ref('')

// 인증 상태 감지
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
  })
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  // 실제 테마 토글 로직은 여기에 추가
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value)
    // 검색 로직 추가
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

// 좌측: 로고 + 흑백전환 버튼
.header-left {
  display: flex;
  align-items: center;
  gap: $spacing-md;
}

// 우측: 검색바 + 로그인/로그아웃
.header-right {
  display: flex;
  gap: $spacing-md;
  align-items: center;
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
    font-size: $font-size-lg;

    &:hover {
      color: $primary-color;
    }
  }

  svg {
    width: 32px;
    height: 32px;
  }
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: $border-radius-md;
  border: none;
  background-color: transparent;
  color: $text-secondary;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $transition-base;

  &:hover {
    background-color: $bg-secondary;
    color: $text-primary;
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

.search-bar {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  background-color: $bg-secondary;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  min-width: 200px;
  transition: $transition-base;

  &:focus-within {
    border-color: $primary-color;
    background-color: white;
  }

  svg {
    width: 20px;
    height: 20px;
    color: $text-secondary;
    flex-shrink: 0;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    font-size: $font-size-sm;
    color: $text-primary;

    &::placeholder {
      color: $text-secondary;
    }
  }

  @media (max-width: $breakpoint-sm) {
    min-width: 120px;
  }
}

.login-btn,
.logout-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background-color: white;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 640px) {
    span {
      display: none;
    }
    padding: 8px;
  }
}

.login-btn {
  &:hover {
    border-color: #087ea4;
    background-color: #f0f9ff;
    color: #087ea4;
  }
}

.logout-btn {
  &:hover {
    border-color: #e53e3e;
    background-color: #fef2f2;
    color: #e53e3e;
  }
}
</style>
