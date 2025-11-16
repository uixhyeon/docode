<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <!-- 왼쪽: 로고, 흑백전환 -->
      <div class="left-section">
        <router-link to="/" class="logo">
          <span class="logo-icon">💾</span>
          <span class="logo-text">코드카이브</span>
        </router-link>
        <button class="theme-toggle-btn" @click="toggleTheme">
          <svg v-if="isDarkMode" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
          </svg>
          <svg v-else width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
        </button>
      </div>

      <!-- 오른쪽: 검색, 로그인 -->
      <div class="right-section">
        <button class="search-btn" @click="openSearch">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <span class="btn-text">검색</span>
        </button>
        <div v-if="user" class="user-info">
          <span class="user-email">{{ user.email }}</span>
          <button class="logout-btn" @click="handleLogout">로그아웃</button>
        </div>
        <router-link v-else to="/login" class="login-btn">로그인</router-link>
      </div>

      <!-- 모바일 메뉴 버튼 -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <div class="mobile-user-section">
        <div v-if="user" class="mobile-user-info">
          <span class="user-email">{{ user.email }}</span>
          <button class="logout-btn" @click="handleLogout">로그아웃</button>
        </div>
        <router-link v-else to="/login" class="login-btn" @click="closeMobileMenu">로그인</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

const router = useRouter()
const isMobileMenuOpen = ref(false)
const user = ref(null)
const isDarkMode = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 로그아웃 핸들러
const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

// 테마 토글
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// 검색 열기
const openSearch = () => {
  // TODO: 검색 모달 구현
  console.log('검색 기능 준비중')
}

// 초기화
onMounted(() => {
  // 사용자 정보 감시
  auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser
  })

  // 테마 초기화
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
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

.left-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
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

.theme-toggle-btn,
.search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }
}

.btn-text {
  font-size: 0.9375rem;
  font-weight: 500;

  @media (max-width: 1024px) {
    display: none;
  }
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-email {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;

  @media (max-width: 1024px) {
    display: none;
  }
}

.logout-btn,
.login-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.logout-btn {
  background: #f3f4f6;
  color: #1f2937;

  &:hover {
    background: #e5e7eb;
  }
}

.login-btn {
  background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
  color: white;

  &:hover {
    opacity: 0.9;
  }
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

.mobile-user-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-user-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;

  .user-email {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
  }
}
</style>
