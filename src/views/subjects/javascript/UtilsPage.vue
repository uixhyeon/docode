<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🛠️ Utility & 라이브러리</h1>
        <p class="page-description">JavaScript 유틸리티 함수와 유용한 라이브러리를 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Lodash</h3>
            <p>유틸리티 라이브러리</p>
          </div>
          <div class="content-item">
            <h3>배열 메서드</h3>
            <p>map, filter, reduce 등</p>
          </div>
          <div class="content-item">
            <h3>문자열 처리</h3>
            <p>String 메서드와 정규식</p>
          </div>
          <div class="content-item">
            <h3>날짜 처리</h3>
            <p>Date와 Luxon 라이브러리</p>
          </div>
          <div class="content-item">
            <h3>Deep Clone</h3>
            <p>깊은 복사 구현</p>
          </div>
          <div class="content-item">
            <h3>Currying & Partial</h3>
            <p>함수형 유틸리티</p>
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
