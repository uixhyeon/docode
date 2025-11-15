<template>
  <div class="category-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>💚 Vue</h1>
        <p class="page-description">Vue.js 관련 코드와 예제들을 모아둔 공간입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 주제</h2>
        <div class="topic-grid">
          <div class="topic-card">
            <h3>🎯 Composition API</h3>
            <p>setup, ref, reactive, computed 등 Composition API 활용</p>
          </div>
          <div class="topic-card">
            <h3>🔌 플러그인</h3>
            <p>Vue Router, Pinia, Vuex 등 Vue 생태계</p>
          </div>
          <div class="topic-card">
            <h3>🎨 컴포넌트</h3>
            <p>재사용 가능한 컴포넌트 설계 및 구현</p>
          </div>
          <div class="topic-card">
            <h3>⚡ 최적화</h3>
            <p>렌더링 최적화, 지연 로딩, 성능 개선</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../components/TabNavigation.vue'

const tabs = [
  { name: 'React', path: '/subjects/react', icon: '⚛️' },
  { name: 'Vue', path: '/subjects/vue', icon: '💚' },
  { name: 'JavaScript', path: '/subjects/javascript', icon: '📜' },
  { name: 'TypeScript', path: '/subjects/typescript', icon: '🔷' }
]
</script>

<style lang="scss" scoped>
.category-page {
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

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.topic-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
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
