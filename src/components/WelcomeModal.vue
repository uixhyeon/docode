<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="handleClose">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>🎓 코드카이브에 오신 것을 환영합니다!</h2>
          <button class="close-btn" @click="handleClose">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="welcome-icon">📚</div>
          <p class="welcome-message">
            이 사이트는 <strong>개인 학습용 코드 아카이브</strong>입니다.
          </p>
          <p class="description">
            다양한 프레임워크와 기능 구현 예제를 카테고리별로 정리해두었습니다.
          </p>

          <div class="features">
            <div class="feature-item">
              <span class="feature-icon">📚</span>
              <span>과목/프레임워크별 학습 자료</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎨</span>
              <span>UI/기능 구현 예제</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔧</span>
              <span>실전 기능 개발 패턴</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🗂️</span>
              <span>도구 & 트러블슈팅</span>
            </div>
          </div>

          <div class="checkbox-container">
            <label>
              <input type="checkbox" v-model="dontShowAgain" />
              <span>다시 보지 않기</span>
            </label>
          </div>

          <button class="start-btn" @click="handleStart">
            시작하기
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const dontShowAgain = ref(false)

const STORAGE_KEY = 'codearchive_welcome_shown'

onMounted(() => {
  const hasSeenWelcome = localStorage.getItem(STORAGE_KEY)
  if (!hasSeenWelcome) {
    isOpen.value = true
  }
})

const handleClose = () => {
  if (dontShowAgain.value) {
    localStorage.setItem(STORAGE_KEY, 'true')
  }
  isOpen.value = false
}

const handleStart = () => {
  if (dontShowAgain.value) {
    localStorage.setItem(STORAGE_KEY, 'true')
  }
  isOpen.value = false
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 540px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 1rem;
    gap: 0.5rem;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1f2937;
    line-height: 1.4;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;

    @media (max-width: 480px) {
      font-size: 1.125rem;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

.close-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;
  flex-shrink: 0;
  min-width: 32px;
  min-height: 32px;

  @media (max-width: 480px) {
    background-color: #f3f4f6;
    color: #1f2937;
    min-width: 36px;
    min-height: 36px;
  }

  &:hover {
    background-color: #f3f4f6;
    color: #1f2937;
  }

  &:active {
    background-color: #e5e7eb;
  }
}

.modal-body {
  padding: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
}

.welcome-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.welcome-message {
  font-size: 1.125rem;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.6;

  strong {
    color: #087ea4;
    font-weight: 700;
  }
}

.description {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  text-align: left;
  font-size: 0.875rem;
  color: #374151;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
  }
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.checkbox-container {
  margin-bottom: 1.5rem;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    color: #6b7280;
    font-size: 0.875rem;

    input[type="checkbox"] {
      cursor: pointer;
      width: 18px;
      height: 18px;
    }
  }
}

.start-btn {
  width: 100%;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(8, 126, 164, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(8, 126, 164, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
