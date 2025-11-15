<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⚡ React 최적화</h1>
        <p class="page-description">React 애플리케이션 성능 최적화 기법들입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>React.memo</h3>
            <p>컴포넌트 리렌더링 최적화</p>
          </div>
          <div class="content-item">
            <h3>useMemo</h3>
            <p>값 메모이제이션으로 연산 최적화</p>
          </div>
          <div class="content-item">
            <h3>useCallback</h3>
            <p>함수 메모이제이션</p>
          </div>
          <div class="content-item">
            <h3>Code Splitting</h3>
            <p>React.lazy와 Suspense를 활용한 코드 분할</p>
          </div>
          <div class="content-item">
            <h3>Virtual DOM 이해</h3>
            <p>React의 렌더링 메커니즘</p>
          </div>
          <div class="content-item">
            <h3>Performance Profiling</h3>
            <p>React DevTools로 성능 측정하기</p>
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
