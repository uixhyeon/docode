<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🧩 Vue Components</h1>
        <p class="page-description">Vue 컴포넌트 고급 패턴과 재사용성을 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Props와 Events</h3>
            <p>컴포넌트 간 데이터 통신</p>
          </div>
          <div class="content-item">
            <h3>Slots</h3>
            <p>Content projection과 named slots</p>
          </div>
          <div class="content-item">
            <h3>v-model</h3>
            <p>양방향 바인딩 구현</p>
          </div>
          <div class="content-item">
            <h3>Component Registration</h3>
            <p>전역/지역 컴포넌트 등록</p>
          </div>
          <div class="content-item">
            <h3>Async Components</h3>
            <p>동적 컴포넌트 로딩</p>
          </div>
          <div class="content-item">
            <h3>컴포넌트 패턴</h3>
            <p>HOC, Mixins, Composables</p>
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
