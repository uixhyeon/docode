<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="signup-card">
        <div class="signup-header">
          <h1>일회성 사용자 생성</h1>
          <p>uixhyeon 계정을 생성합니다</p>
        </div>

        <button @click="createUser" class="create-btn" :disabled="loading || created">
          <span v-if="!loading && !created">사용자 생성</span>
          <span v-else-if="loading">생성 중...</span>
          <span v-else>생성 완료!</span>
        </button>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>

        <div class="info-box">
          <p><strong>아이디:</strong> uixhyeon</p>
          <p><strong>비밀번호:</strong> uixhyeon</p>
          <p><strong>이메일:</strong> uixhyeon@codearchive.com</p>
        </div>

        <router-link to="/login" class="login-link">
          로그인 페이지로 이동
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config'

const loading = ref(false)
const created = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const createUser = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  loading.value = true

  try {
    const email = 'uixhyeon@codearchive.com'
    const password = 'uixhyeon'

    await createUserWithEmailAndPassword(auth, email, password)

    created.value = true
    successMessage.value = '사용자가 성공적으로 생성되었습니다! 이제 로그인할 수 있습니다.'
  } catch (error) {
    console.error('Signup error:', error)

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage.value = '이미 생성된 계정입니다. 로그인 페이지로 이동하세요.'
        break
      case 'auth/invalid-email':
        errorMessage.value = '유효하지 않은 이메일입니다.'
        break
      case 'auth/weak-password':
        errorMessage.value = '비밀번호가 너무 약합니다.'
        break
      default:
        errorMessage.value = '계정 생성에 실패했습니다.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.signup-container {
  width: 100%;
  max-width: 420px;
}

.signup-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 3rem 2.5rem;
}

.signup-header {
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
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

.create-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 1.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
  margin-bottom: 1rem;
}

.success-message {
  padding: 0.875rem 1rem;
  background: #f0fff4;
  border: 1px solid #68d391;
  border-radius: 8px;
  color: #22543d;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
}

.info-box {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  p {
    margin: 0.5rem 0;
    font-size: 0.9375rem;
    color: #2d3748;

    strong {
      color: #1a202c;
    }
  }
}

.login-link {
  display: block;
  text-align: center;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #764ba2;
  }
}
</style>
