<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay" @click="handleClose" role="dialog" aria-modal="true">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3>{{ title }}</h3>
            <button
              class="close-btn"
              @click="handleClose"
              aria-label="닫기"
            >×</button>
          </div>

          <div class="modal-body">
            <div class="form-group">
              <label for="modal-icon">아이콘</label>
              <input
                id="modal-icon"
                v-model="localIcon"
                type="text"
                placeholder="이모지를 입력하세요"
                class="form-input"
                :disabled="loading"
                maxlength="10"
              />
            </div>

            <div class="form-group">
              <label for="modal-name">이름</label>
              <input
                id="modal-name"
                v-model="localName"
                type="text"
                placeholder="이름을 입력하세요"
                class="form-input"
                :disabled="loading"
                maxlength="50"
                @keyup.enter="handleSave"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              class="btn-cancel"
              @click="handleClose"
              :disabled="loading"
            >취소</button>

            <button
              v-if="showDelete"
              class="btn-delete"
              @click="handleDelete"
              :disabled="loading"
            >삭제</button>

            <button
              class="btn-save"
              @click="handleSave"
              :disabled="loading"
            >
              {{ loading ? '저장 중...' : '저장' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: '카테고리 수정'
  },
  iconValue: {
    type: String,
    default: ''
  },
  nameValue: {
    type: String,
    default: ''
  },
  showDelete: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'save', 'delete'])

const localIcon = ref('')
const localName = ref('')

// props 값 동기화
watch(() => props.iconValue, (newVal) => {
  localIcon.value = newVal
}, { immediate: true })

watch(() => props.nameValue, (newVal) => {
  localName.value = newVal
}, { immediate: true })

// ESC 키로 닫기
const handleEsc = (e) => {
  if (e.key === 'Escape' && props.isOpen && !props.loading) {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
})

const handleClose = () => {
  if (!props.loading) {
    emit('close')
  }
}

const handleSave = () => {
  if (props.loading) return

  emit('save', {
    icon: localIcon.value.trim(),
    name: localName.value.trim()
  })
}

const handleDelete = () => {
  if (props.loading) return
  emit('delete')
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
  }
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #f3f4f6;
    color: #1f2937;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #6b7280;
  }
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-family: inherit;
  background: white;
  color: #1f2937;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #087ea4;
    box-shadow: 0 0 0 3px rgba(8, 126, 164, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel,
.btn-delete,
.btn-save {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.btn-cancel {
  background: #f3f4f6;
  color: #6b7280;

  &:hover:not(:disabled) {
    background: #e5e7eb;
  }
}

.btn-delete {
  background: #fee;
  color: #d73a49;
  margin-right: auto;

  &:hover:not(:disabled) {
    background: #fdd;
  }
}

.btn-save {
  background: #087ea4;
  color: white;

  &:hover:not(:disabled) {
    background: #0c5f7a;
    box-shadow: 0 4px 8px rgba(8, 126, 164, 0.3);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
