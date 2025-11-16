import { ref, reactive } from 'vue'

// 전역 상태
export const toastState = reactive({
  toasts: ref([])
})

let toastId = 0

export function useToast() {
  const addToast = (message, type = 'info', duration = 3000) => {
    const id = ++toastId
    const toast = {
      id,
      message,
      type // 'success', 'error', 'warning', 'info'
    }

    toastState.toasts.value.push(toast)

    // 자동 제거
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }

    return id
  }

  const removeToast = (id) => {
    const index = toastState.toasts.value.findIndex(t => t.id === id)
    if (index !== -1) {
      toastState.toasts.value.splice(index, 1)
    }
  }

  const success = (message, duration) => addToast(message, 'success', duration)
  const error = (message, duration) => addToast(message, 'error', duration)
  const warning = (message, duration) => addToast(message, 'warning', duration)
  const info = (message, duration) => addToast(message, 'info', duration)

  return {
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  }
}
