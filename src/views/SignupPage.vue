<template>
  <div class="signup-page">
    <div class="signup-container">
      <div class="signup-card">
        <div class="signup-header">
          <h1>사용자 계정 생성</h1>
          <p>필요한 계정을 생성하세요</p>
        </div>

        <div class="users-list">
          <div class="user-item">
            <div class="user-info">
              <p><strong>아이디:</strong> uixhyeon</p>
              <p><strong>비밀번호:</strong> uixhyeon</p>
            </div>
            <button @click="createUserAccount('uixhyeon')" class="create-btn" :disabled="loading || createdUsers.includes('uixhyeon')">
              <span v-if="!loading && !createdUsers.includes('uixhyeon')">생성</span>
              <span v-else-if="loading && currentUser === 'uixhyeon'">생성 중...</span>
              <span v-else>완료</span>
            </button>
          </div>

          <div class="user-item">
            <div class="user-info">
              <p><strong>아이디:</strong> a</p>
              <p><strong>비밀번호:</strong> aaaaaa</p>
            </div>
            <button @click="createUserAccount('a', 'aaaaaa')" class="create-btn" :disabled="loading || createdUsers.includes('a')">
              <span v-if="!loading && !createdUsers.includes('a')">생성</span>
              <span v-else-if="loading && currentUser === 'a'">생성 중...</span>
              <span v-else>완료</span>
            </button>
          </div>
        </div>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
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
const createdUsers = ref([])
const currentUser = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const createUserAccount = async (username, customPassword = null) => {
  errorMessage.value = ''
  successMessage.value = ''
  loading.value = true
  currentUser.value = username

  try {
    const email = `${username}@codearchive.com`
    const password = customPassword || username

    await createUserWithEmailAndPassword(auth, email, password)

    createdUsers.value.push(username)
    successMessage.value = `${username} 계정이 성공적으로 생성되었습니다!`
  } catch (error) {
    console.error('Signup error:', error)

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage.value = `${username} 계정은 이미 생성되어 있습니다.`
        createdUsers.value.push(username)
        break
      case 'auth/invalid-email':
        errorMessage.value = '유효하지 않은 이메일입니다.'
        break
      case 'auth/weak-password':
        errorMessage.value = '비밀번호는 최소 6자 이상이어야 합니다.'
        break
      default:
        errorMessage.value = '계정 생성에 실패했습니다.'
    }
  } finally {
    loading.value = false
    currentUser.value = ''
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

.users-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.user-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.user-info {
  flex: 1;

  p {
    margin: 0.25rem 0;
    font-size: 0.875rem;
    color: #2d3748;

    strong {
      color: #1a202c;
    }
  }
}

.create-btn {
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.4);
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
