<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🎨 React 스타일링</h1>
        <p class="page-description">React 컴포넌트 스타일링 방법들을 소개합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>CSS Modules</h3>
            <p>스코프가 지정된 CSS 스타일링</p>
          </div>
          <div class="content-item">
            <h3>Styled Components</h3>
            <p>CSS-in-JS의 대표주자</p>
          </div>
          <div class="content-item">
            <h3>Emotion</h3>
            <p>고성능 CSS-in-JS 라이브러리</p>
          </div>
          <div class="content-item">
            <h3>Tailwind CSS</h3>
            <p>유틸리티 우선 CSS 프레임워크</p>
          </div>
          <div class="content-item">
            <h3>Sass/SCSS</h3>
            <p>CSS 전처리기 활용</p>
          </div>
          <div class="content-item">
            <h3>CSS-in-JS 비교</h3>
            <p>다양한 스타일링 방법 비교 분석</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Hooks', path: '/subjects/react/hooks', icon: '🎣' },
  { name: '상태 관리', path: '/subjects/react/state', icon: '📦' },
  { name: '스타일링', path: '/subjects/react/styling', icon: '🎨' },
  { name: '최적화', path: '/subjects/react/optimization', icon: '⚡' }
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
