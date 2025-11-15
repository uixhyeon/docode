<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⌨️ 키보드 인터랙션</h1>
        <p class="page-description">키보드 이벤트와 접근성을 고려한 상호작용을 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Keyboard Events</h3>
            <p>keydown, keyup, keypress</p>
          </div>
          <div class="content-item">
            <h3>Key Codes</h3>
            <p>키 코드와 특수 키</p>
          </div>
          <div class="content-item">
            <h3>Shortcuts</h3>
            <p>단축키 구현</p>
          </div>
          <div class="content-item">
            <h3>Focus Management</h3>
            <p>포커스 관리</p>
          </div>
          <div class="content-item">
            <h3>Tab Navigation</h3>
            <p>Tab 키 네비게이션</p>
          </div>
          <div class="content-item">
            <h3>Accessibility (a11y)</h3>
            <p>WCAG 접근성 표준</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Drag & Drop', path: '/ui-features/interaction/drag-drop', icon: '🖱️' },
  { name: 'Gesture', path: '/ui-features/interaction/gesture', icon: '👆' },
  { name: 'Components', path: '/ui-features/interaction/components', icon: '🎯' },
  { name: 'Keyboard', path: '/ui-features/interaction/keyboard', icon: '⌨️' },
]
</script>

<style lang="scss" scoped>
.subcategory-page {
  min-height: 100%;
}

.page-content {
  max-width: 100%;
}

.page-header {
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .page-description {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
}

.content-section {
  margin-bottom: 3rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--color-border-light);
  }
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.content-item {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }
}
</style>
