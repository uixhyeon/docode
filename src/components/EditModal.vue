<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        @click="handleOverlayClick"
        @keydown.esc="handleClose"
      >
        <div
          ref="modalContent"
          class="modal-content"
          @click.stop
          tabindex="-1"
        >
          <div class="modal-header">
            <h3 :id="titleId">{{ title }}</h3>
            <button
              class="close-btn"
              @click="handleClose"
              aria-label="닫기"
              :disabled="loading"
            >
              ×
            </button>
          </div>

          <div class="modal-body">
            <div
              v-for="field in fields"
              :key="field.name"
              class="form-group"
            >
              <label :for="field.name">
                {{ field.label }}
                <span v-if="field.required" class="required">*</span>
              </label>

              <input
                v-if="field.type !== 'textarea'"
                :id="field.name"
                v-model="formData[field.name]"
                :type="field.type || 'text'"
                :placeholder="field.placeholder"
                :maxlength="field.maxLength || 100"
                class="form-input"
                :class="{ error: errors[field.name] }"
                :disabled="loading"
                @input="clearError(field.name)"
              />

              <textarea
                v-else
                :id="field.name"
                v-model="formData[field.name]"
                :placeholder="field.placeholder"
                :maxlength="field.maxLength || 500"
                :rows="field.rows || 3"
                class="form-textarea"
                :class="{ error: errors[field.name] }"
                :disabled="loading"
                @input="clearError(field.name)"
              ></textarea>

              <span v-if="errors[field.name]" class="error-message">
                {{ errors[field.name] }}
              </span>
            </div>
          </div>

          <div class="modal-footer">
            <button
              class="btn-cancel"
              @click="handleClose"
              :disabled="loading"
            >
              취소
            </button>
            <button
              v-if="!isNew"
              class="btn-delete"
              @click="handleDelete"
              :disabled="loading"
            >
              {{ loading && deleteLoading ? '삭제 중...' : '삭제' }}
            </button>
            <button
              class="btn-save"
              @click="handleSave"
              :disabled="loading"
            >
              {{ loading && !deleteLoading ? '저장 중...' : '저장' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  fields: {
    type: Array,
    required: true,
    // fields: [{ name: 'icon', label: '아이콘', type: 'text', placeholder: '...', required: true, maxLength: 10 }]
  },
  initialData: {
    type: Object,
    default: () => ({})
  },
  isNew: {
    type: Boolean,
    default: false
  },
  validate: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'save', 'delete'])

const modalContent = ref(null)
const formData = ref({})
const errors = ref({})
const loading = ref(false)
const deleteLoading = ref(false)
const titleId = computed(() => `modal-title-${Math.random().toString(36).substr(2, 9)}`)

// 모달이 열릴 때 폼 데이터 초기화 및 포커스
watch(() => props.modelValue, async (newVal) => {
  if (newVal) {
    // 폼 데이터 초기화
    formData.value = { ...props.initialData }
    errors.value = {}
    loading.value = false
    deleteLoading.value = false

    // 포커스 설정
    await nextTick()
    if (modalContent.value) {
      modalContent.value.focus()

      // 첫 번째 input에 포커스
      const firstInput = modalContent.value.querySelector('input, textarea')
      if (firstInput) {
        firstInput.focus()
      }
    }

    // body 스크롤 방지
    document.body.style.overflow = 'hidden'
  } else {
    // body 스크롤 복원
    document.body.style.overflow = ''
  }
})

// 입력 검증
const validateForm = () => {
  errors.value = {}
  let isValid = true

  props.fields.forEach(field => {
    const value = formData.value[field.name]

    // 필수 필드 검증
    if (field.required && (!value || !value.trim())) {
      errors.value[field.name] = `${field.label}을(를) 입력해주세요.`
      isValid = false
      return
    }

    // 길이 검증
    if (value && field.maxLength && value.length > field.maxLength) {
      errors.value[field.name] = `최대 ${field.maxLength}자까지 입력 가능합니다.`
      isValid = false
      return
    }

    // 이모지 검증 (icon 필드인 경우)
    if (field.name === 'icon' && value && value.trim()) {
      const emojiRegex = /^[\p{Emoji}\p{Emoji_Component}]+$/u
      if (!emojiRegex.test(value.trim())) {
        errors.value[field.name] = '올바른 이모지를 입력해주세요.'
        isValid = false
        return
      }
      if (value.trim().length > 10) {
        errors.value[field.name] = '이모지는 최대 10자까지 입력 가능합니다.'
        isValid = false
        return
      }
    }

    // XSS 방지 - 특수 문자 검증
    if (value && /<script|javascript:|onerror=|onclick=/i.test(value)) {
      errors.value[field.name] = '허용되지 않는 문자가 포함되어 있습니다.'
      isValid = false
      return
    }
  })

  // 커스텀 검증 함수
  if (props.validate && isValid) {
    const customErrors = props.validate(formData.value)
    if (customErrors && Object.keys(customErrors).length > 0) {
      errors.value = { ...errors.value, ...customErrors }
      isValid = false
    }
  }

  return isValid
}

const clearError = (fieldName) => {
  if (errors.value[fieldName]) {
    delete errors.value[fieldName]
  }
}

const handleSave = async () => {
  if (!validateForm()) {
    return
  }

  loading.value = true
  deleteLoading.value = false

  try {
    await emit('save', { ...formData.value })
  } finally {
    loading.value = false
  }
}

const handleDelete = async () => {
  loading.value = true
  deleteLoading.value = true

  try {
    await emit('delete')
  } finally {
    loading.value = false
    deleteLoading.value = false
  }
}

const handleClose = () => {
  if (!loading.value) {
    emit('update:modelValue', false)
  }
}

const handleOverlayClick = () => {
  handleClose()
}
</script>

<style lang="scss" scoped>
// 모달 애니메이션
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.95) translateY(-20px);
}

// 모달 스타일
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
  outline: none;
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
    opacity: 0.5;
    cursor: not-allowed;
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

    .required {
      color: #ef4444;
      margin-left: 2px;
    }
  }
}

.form-input,
.form-textarea {
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

  &.error {
    border-color: #ef4444;

    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  }

  &:disabled {
    background: #f9fafb;
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.6;
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  color: #ef4444;
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
    opacity: 0.6;
    cursor: not-allowed;
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
</style>
