<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🖼️ Dashboard Layout</h1>
        <p class="page-description">대시보드 스타일 레이아웃 구현을 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Sidebar Navigation</h3>
            <p>사이드바 네비게이션</p>
          </div>
          <div class="content-item">
            <h3>Top Bar</h3>
            <p>상단 헤더 구성</p>
          </div>
          <div class="content-item">
            <h3>Widget Grid</h3>
            <p>위젯 그리드 배치</p>
          </div>
          <div class="content-item">
            <h3>Responsive Design</h3>
            <p>반응형 대시보드</p>
          </div>
          <div class="content-item">
            <h3>Resizable Panels</h3>
            <p>리사이징 가능한 패널</p>
          </div>
          <div class="content-item">
            <h3>데이터 시각화</h3>
            <p>Chart와 Graph 통합</p>
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
