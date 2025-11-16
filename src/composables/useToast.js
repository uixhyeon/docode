import { ref } from 'vue'

const toastState = ref({
  isVisible: false,
  message: '',
  type: 'info'
})

let timeoutId = null

export function useToast() {
  const show = (message, type = 'info', duration = 3000) => {
    // 기존 타이머 클리어
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    toastState.value = {
      isVisible: true,
      message,
      type
    }

    timeoutId = setTimeout(() => {
      toastState.value.isVisible = false
    }, duration)
  }

  const success = (message, duration) => show(message, 'success', duration)
  const error = (message, duration) => show(message, 'error', duration)
  const warning = (message, duration) => show(message, 'warning', duration)
  const info = (message, duration) => show(message, 'info', duration)

  return {
    toastState,
    show,
    success,
    error,
    warning,
    info
  }
}
