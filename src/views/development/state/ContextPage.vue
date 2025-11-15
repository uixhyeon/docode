<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📦 Context API</h1>
        <p class="page-description">React Context API를 활용한 상태 관리를 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>createContext</h3>
            <p>Context 생성</p>
          </div>
          <div class="content-item">
            <h3>useContext Hook</h3>
            <p>Context 사용</p>
          </div>
          <div class="content-item">
            <h3>Provider</h3>
            <p>Context Provider</p>
          </div>
          <div class="content-item">
            <h3>Performance</h3>
            <p>렌더링 최적화</p>
          </div>
          <div class="content-item">
            <h3>Custom Hooks</h3>
            <p>커스텀 훅 활용</p>
          </div>
          <div class="content-item">
            <h3>Multi-level Context</h3>
            <p>중첩 Context 관리</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Redux', path: '/development/state/redux', icon: '🔴' },
  { name: 'Zustand', path: '/development/state/zustand', icon: '🎯' },
  { name: 'Context', path: '/development/state/context', icon: '📦' },
  { name: 'Storage', path: '/development/state/storage', icon: '💾' },
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
