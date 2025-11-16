<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="isVisible" :class="['toast', `toast-${type}`]" role="alert">
        <div class="toast-icon">{{ icon }}</div>
        <div class="toast-message">{{ message }}</div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  }
})

const icon = computed(() => {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }
  return icons[props.type]
})
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  min-width: 300px;
  max-width: 500px;

  @media (max-width: 640px) {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    min-width: auto;
  }
}

.toast-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.toast-message {
  flex: 1;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.4;
}

.toast-success {
  border-left: 4px solid #10b981;

  .toast-icon {
    background: #d1fae5;
    color: #10b981;
  }

  .toast-message {
    color: #065f46;
  }
}

.toast-error {
  border-left: 4px solid #ef4444;

  .toast-icon {
    background: #fee2e2;
    color: #ef4444;
  }

  .toast-message {
    color: #991b1b;
  }
}

.toast-warning {
  border-left: 4px solid #f59e0b;

  .toast-icon {
    background: #fef3c7;
    color: #f59e0b;
  }

  .toast-message {
    color: #92400e;
  }
}

.toast-info {
  border-left: 4px solid #3b82f6;

  .toast-icon {
    background: #dbeafe;
    color: #3b82f6;
  }

  .toast-message {
    color: #1e40af;
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
