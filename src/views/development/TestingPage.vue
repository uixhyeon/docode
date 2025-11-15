<template>
  <div class="category-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🧪 테스팅</h1>
        <p class="page-description">단위 테스트, 통합 테스트, E2E 테스트 작성 방법입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 주제</h2>
        <div class="topic-grid">
          <div class="topic-card">
            <h3>✅ Jest</h3>
            <p>단위 테스트와 스냅샷 테스트</p>
          </div>
          <div class="topic-card">
            <h3>🧩 Testing Library</h3>
            <p>컴포넌트 테스트와 사용자 중심 테스트</p>
          </div>
          <div class="topic-card">
            <h3>🎭 E2E 테스트</h3>
            <p>Playwright, Cypress를 이용한 E2E 테스트</p>
          </div>
          <div class="topic-card">
            <h3>📸 시각적 테스트</h3>
            <p>Storybook과 시각적 회귀 테스트</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../components/TabNavigation.vue'

const tabs = [
  { name: 'API 연동', path: '/development/api', icon: '🔌' },
  { name: '상태 관리', path: '/development/state', icon: '📦' },
  { name: '최적화', path: '/development/optimization', icon: '⚡' },
  { name: '테스팅', path: '/development/testing', icon: '🧪' }
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
