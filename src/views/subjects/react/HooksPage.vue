<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🎣 React Hooks</h1>
        <p class="page-description">React Hooks의 핵심 개념과 활용법을 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>useState</h3>
            <p>상태 관리의 기본, useState Hook 활용법</p>
          </div>
          <div class="content-item">
            <h3>useEffect</h3>
            <p>사이드 이펙트 처리와 생명주기 관리</p>
          </div>
          <div class="content-item">
            <h3>useContext</h3>
            <p>Context API를 활용한 전역 상태 관리</p>
          </div>
          <div class="content-item">
            <h3>useRef</h3>
            <p>DOM 접근과 값 유지하기</p>
          </div>
          <div class="content-item">
            <h3>useMemo & useCallback</h3>
            <p>성능 최적화를 위한 메모이제이션</p>
          </div>
          <div class="content-item">
            <h3>Custom Hooks</h3>
            <p>재사용 가능한 로직 추상화</p>
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
