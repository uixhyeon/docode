<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🪟 Modal & Dialog</h1>
        <p class="page-description">모달 및 다이얼로그 레이아웃을 구현합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Modal Structure</h3>
            <p>모달 구조 및 백드롭</p>
          </div>
          <div class="content-item">
            <h3>Dialog Element</h3>
            <p>HTML dialog 요소</p>
          </div>
          <div class="content-item">
            <h3>Overlay & Backdrop</h3>
            <p>오버레이 효과</p>
          </div>
          <div class="content-item">
            <h3>Accessibility</h3>
            <p>ARIA와 focus 관리</p>
          </div>
          <div class="content-item">
            <h3>Animation</h3>
            <p>모달 오픈/클로즈 애니메이션</p>
          </div>
          <div class="content-item">
            <h3>스택 관리</h3>
            <p>다중 모달 관리</p>
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
