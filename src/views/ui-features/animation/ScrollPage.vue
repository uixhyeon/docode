<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📜 Scroll Animations</h1>
        <p class="page-description">스크롤 기반 애니메이션을 구현합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Intersection Observer</h3>
            <p>요소 가시성 감지</p>
          </div>
          <div class="content-item">
            <h3>Scroll Events</h3>
            <p>scroll 이벤트 처리</p>
          </div>
          <div class="content-item">
            <h3>Parallax Effect</h3>
            <p>패럴렉스 효과</p>
          </div>
          <div class="content-item">
            <h3>Scroll Progress</h3>
            <p>스크롤 진행도</p>
          </div>
          <div class="content-item">
            <h3>Fade In On Scroll</h3>
            <p>스크롤 페이드인</p>
          </div>
          <div class="content-item">
            <h3>Animate on Scroll</h3>
            <p>AOS 라이브러리</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Transitions', path: '/ui-features/animation/transition', icon: '🎬' },
  { name: 'Keyframes', path: '/ui-features/animation/keyframe', icon: '🎞️' },
  { name: 'Scroll', path: '/ui-features/animation/scroll', icon: '📜' },
  { name: 'Libraries', path: '/ui-features/animation/library', icon: '📚' },
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
