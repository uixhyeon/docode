<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🔌 Vue Plugins</h1>
        <p class="page-description">Vue 플러그인 개발과 활용에 대해 학습합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Plugin 구조</h3>
            <p>Vue 플러그인의 기본 구조와 작성법</p>
          </div>
          <div class="content-item">
            <h3>app.use()</h3>
            <p>플러그인 등록 및 사용</p>
          </div>
          <div class="content-item">
            <h3>Global Properties</h3>
            <p>전역 속성 등록</p>
          </div>
          <div class="content-item">
            <h3>Global Components</h3>
            <p>전역 컴포넌트 등록</p>
          </div>
          <div class="content-item">
            <h3>Directives</h3>
            <p>Vue 디렉티브 개발</p>
          </div>
          <div class="content-item">
            <h3>유명한 플러그인</h3>
            <p>Vue Router, Pinia 등 주요 생태계</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Composition API', path: '/subjects/vue/composition', icon: '📝' },
  { name: 'Plugins', path: '/subjects/vue/plugins', icon: '🔌' },
  { name: 'Components', path: '/subjects/vue/components', icon: '🧩' },
  { name: '최적화', path: '/subjects/vue/optimization', icon: '⚡' },
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
