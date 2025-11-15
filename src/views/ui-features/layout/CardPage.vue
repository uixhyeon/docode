<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🃏 Card Layout</h1>
        <p class="page-description">카드 기반 레이아웃 구현 방법을 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Card Structure</h3>
            <p>카드 컴포넌트 구조</p>
          </div>
          <div class="content-item">
            <h3>Card Grid</h3>
            <p>카드 그리드 레이아웃</p>
          </div>
          <div class="content-item">
            <h3>Card Variations</h3>
            <p>다양한 카드 스타일</p>
          </div>
          <div class="content-item">
            <h3>Image Cards</h3>
            <p>이미지 카드</p>
          </div>
          <div class="content-item">
            <h3>Hover Effects</h3>
            <p>호버 효과와 상호작용</p>
          </div>
          <div class="content-item">
            <h3>Masonry Layout</h3>
            <p>핀터레스트 스타일 레이아웃</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Grid', path: '/ui-features/layout/grid', icon: '📊' },
  { name: 'Dashboard', path: '/ui-features/layout/dashboard', icon: '🖼️' },
  { name: 'Card', path: '/ui-features/layout/card', icon: '🃏' },
  { name: 'Modal', path: '/ui-features/layout/modal', icon: '🪟' },
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
