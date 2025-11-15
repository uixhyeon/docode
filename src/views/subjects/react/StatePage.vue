<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📦 React 상태 관리</h1>
        <p class="page-description">다양한 상태 관리 패턴과 라이브러리 활용법입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Props Drilling</h3>
            <p>Props를 통한 상태 전달과 문제점</p>
          </div>
          <div class="content-item">
            <h3>Context API</h3>
            <p>전역 상태 관리를 위한 React Context</p>
          </div>
          <div class="content-item">
            <h3>Redux Toolkit</h3>
            <p>Redux의 현대적인 사용법</p>
          </div>
          <div class="content-item">
            <h3>Zustand</h3>
            <p>간단하고 빠른 상태 관리</p>
          </div>
          <div class="content-item">
            <h3>Recoil</h3>
            <p>React를 위한 상태 관리 라이브러리</p>
          </div>
          <div class="content-item">
            <h3>Jotai</h3>
            <p>Atomic 상태 관리</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Hooks', path: '/subjects/react/hooks', icon: '🎣' },
  { name: '상태 관리', path: '/subjects/react/state', icon: '📦' },
  { name: '스타일링', path: '/subjects/react/styling', icon: '🎨' },
  { name: '최적화', path: '/subjects/react/optimization', icon: '⚡' }
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
