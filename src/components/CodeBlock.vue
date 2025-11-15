<template>
  <div class="code-block">
    <div class="code-header">
      <span class="language">{{ language }}</span>
      <button class="copy-button" @click="copyCode" :class="{ copied: isCopied }">
        <svg v-if="!isCopied" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        <svg v-else width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        {{ isCopied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre class="code-content"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'javascript'
  }
})

const isCopied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style lang="scss" scoped>
.code-block {
  margin: $spacing-lg 0;
  border-radius: $border-radius-md;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-sm $spacing-md;
  background-color: #1e1e1e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.language {
  font-size: $font-size-xs;
  text-transform: uppercase;
  color: #858585;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.copy-button {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-xs $spacing-sm;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: $border-radius-sm;
  color: #d4d4d4;
  font-size: $font-size-xs;
  cursor: pointer;
  transition: $transition-base;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &.copied {
    border-color: #10b981;
    color: #10b981;
  }

  svg {
    width: 14px;
    height: 14px;
  }
}

.code-content {
  margin: 0;
  padding: $spacing-lg;
  background-color: #282c34;
  overflow-x: auto;
  font-size: $font-size-sm;
  line-height: 1.6;

  code {
    font-family: $font-family-mono;
    color: #abb2bf;
    background: none;
    padding: 0;
  }
}

// Syntax highlighting colors (simple version)
.code-content {
  :deep(.keyword) {
    color: #c678dd;
  }

  :deep(.string) {
    color: #98c379;
  }

  :deep(.function) {
    color: #61afef;
  }

  :deep(.comment) {
    color: #5c6370;
    font-style: italic;
  }
}
</style>
