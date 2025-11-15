<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⏳ 비동기 처리</h1>
        <p class="page-description">콜백, Promise, async/await 등 비동기 처리를 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Callbacks</h3>
            <p>콜백 함수와 콜백 지옥</p>
          </div>
          <div class="content-item">
            <h3>Promises</h3>
            <p>Promise 체인과 상태 관리</p>
          </div>
          <div class="content-item">
            <h3>async/await</h3>
            <p>동기식 비동기 코드 작성</p>
          </div>
          <div class="content-item">
            <h3>Promise.all/race</h3>
            <p>다중 Promise 처리</p>
          </div>
          <div class="content-item">
            <h3>Error Handling</h3>
            <p>try-catch와 에러 처리</p>
          </div>
          <div class="content-item">
            <h3>Generators</h3>
            <p>Generator 함수와 yield</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'ES6+', path: '/subjects/javascript/es6', icon: '🆕' },
  { name: 'Async', path: '/subjects/javascript/async', icon: '⏳' },
  { name: 'Patterns', path: '/subjects/javascript/patterns', icon: '🔨' },
  { name: 'Utils', path: '/subjects/javascript/utils', icon: '🛠️' },
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
