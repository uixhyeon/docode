<template>
  <div class="category-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🧩 컴포넌트</h1>
        <p class="page-description">재사용 가능한 UI 컴포넌트 라이브러리입니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 주제</h2>
        <div class="topic-grid">
          <div class="topic-card">
            <h3>🔘 버튼</h3>
            <p>다양한 스타일과 상태의 버튼 컴포넌트</p>
          </div>
          <div class="topic-card">
            <h3>📝 폼</h3>
            <p>Input, Select, Checkbox 등 폼 요소</p>
          </div>
          <div class="topic-card">
            <h3>🎴 카드</h3>
            <p>콘텐츠를 담는 다양한 카드 디자인</p>
          </div>
          <div class="topic-card">
            <h3>🍞 알림</h3>
            <p>Toast, Notification, Alert 컴포넌트</p>
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
