<template>
  <div class="category-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>💡 팁</h1>
        <p class="page-description">개발 생산성을 높이는 팁과 트릭들입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 주제</h2>
        <div class="topic-grid">
          <div class="topic-card">
            <h3>⌨️ VS Code 팁</h3>
            <p>단축키, 확장 프로그램, 설정</p>
          </div>
          <div class="topic-card">
            <h3>🎯 생산성 향상</h3>
            <p>워크플로우 최적화, 자동화</p>
          </div>
          <div class="topic-card">
            <h3>🔍 디버깅 팁</h3>
            <p>효율적인 버그 찾기와 해결 방법</p>
          </div>
          <div class="topic-card">
            <h3>📝 코드 리뷰</h3>
            <p>좋은 코드 작성과 리뷰 가이드</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../components/TabNavigation.vue'

const tabs = [
  { name: '도구', path: '/others/tools', icon: '🛠️' },
  { name: '참고 자료', path: '/others/references', icon: '📚' },
  { name: '팁', path: '/others/tips', icon: '💡' }
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
