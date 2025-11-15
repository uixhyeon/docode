<template>
  <div class="category-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📐 레이아웃</h1>
        <p class="page-description">다양한 레이아웃 패턴과 구현 방법들입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 주제</h2>
        <div class="topic-grid">
          <div class="topic-card">
            <h3>📱 반응형 그리드</h3>
            <p>Flexbox, CSS Grid를 활용한 반응형 레이아웃</p>
          </div>
          <div class="topic-card">
            <h3>🗂️ 대시보드</h3>
            <p>관리자 대시보드 레이아웃 패턴</p>
          </div>
          <div class="topic-card">
            <h3>📰 카드 레이아웃</h3>
            <p>그리드 기반 카드 레이아웃 시스템</p>
          </div>
          <div class="topic-card">
            <h3>🔲 모달 & 오버레이</h3>
            <p>모달, 드로어, 팝오버 등 오버레이 UI</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../components/TabNavigation.vue'

const tabs = [
  { name: '인터랙션', path: '/ui-features/interaction', icon: '✨' },
  { name: '레이아웃', path: '/ui-features/layout', icon: '📐' },
  { name: '애니메이션', path: '/ui-features/animation', icon: '🎬' },
  { name: '컴포넌트', path: '/ui-features/component', icon: '🧩' }
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
