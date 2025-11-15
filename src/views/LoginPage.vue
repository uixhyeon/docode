<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32" fill="none">
            <path fill="#087ea4" d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 25.2A11.2 11.2 0 1127.2 16 11.2 11.2 0 0116 27.2z"/>
            <circle cx="16" cy="16" r="6" fill="#087ea4"/>
          </svg>
          <h1>Code Archive</h1>
          <p>코드 아카이브에 로그인하세요</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username">아이디</label>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="uixhyeon"
              required
              autocomplete="username"
            />
          </div>

          <div class="form-group">
            <label for="password">비밀번호</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="uixhyeon"
              required
              autocomplete="current-password"
            />
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <button type="submit" class="login-btn" :disabled="loading">
            <span v-if="!loading">로그인</span>
            <span v-else>로그인 중...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config'

const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''
  loading.value = true

  try {
    // username을 이메일 형식으로 변환
    const email = `${username.value}@codearchive.com`
    await signInWithEmailAndPassword(auth, email, password.value)
    router.push('/')
  } catch (error) {
    console.error('Login error:', error)

    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage.value = '유효하지 않은 아이디 형식입니다.'
        break
      case 'auth/user-disabled':
        errorMessage.value = '비활성화된 계정입니다.'
        break
      case 'auth/user-not-found':
        errorMessage.value = '존재하지 않는 계정입니다.'
        break
      case 'auth/wrong-password':
        errorMessage.value = '잘못된 비밀번호입니다.'
        break
      case 'auth/invalid-credential':
        errorMessage.value = '아이디 또는 비밀번호가 올바르지 않습니다.'
        break
      default:
        errorMessage.value = '로그인에 실패했습니다. 다시 시도해주세요.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.login-container {
  width: 100%;
  max-width: 420px;
}

.login-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 3rem 2.5rem;
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;

  svg {
    margin: 0 auto 1.5rem;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 0.5rem;
  }

  p {
    color: #718096;
    font-size: 0.9375rem;
    margin: 0;
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #2d3748;
  }

  input {
    padding: 0.875rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #cbd5e0;
    }
  }
}

.error-message {
  padding: 0.875rem 1rem;
  background: #fff5f5;
  border: 1px solid #fc8181;
  border-radius: 8px;
  color: #c53030;
  font-size: 0.875rem;
  text-align: center;
}

.login-btn {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
}
</style>
