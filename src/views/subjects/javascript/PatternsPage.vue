<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🔨 Design Patterns</h1>
        <p class="page-description">JavaScript에서 자주 사용되는 디자인 패턴을 학습합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Singleton</h3>
            <p>싱글톤 패턴</p>
          </div>
          <div class="content-item">
            <h3>Observer</h3>
            <p>옵저버 패턴</p>
          </div>
          <div class="content-item">
            <h3>Module</h3>
            <p>모듈 패턴</p>
          </div>
          <div class="content-item">
            <h3>Factory</h3>
            <p>팩토리 패턴</p>
          </div>
          <div class="content-item">
            <h3>Prototype</h3>
            <p>프로토타입 패턴</p>
          </div>
          <div class="content-item">
            <h3>Mixin</h3>
            <p>믹신 패턴</p>
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
