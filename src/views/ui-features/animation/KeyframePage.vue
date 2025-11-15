<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🎞️ CSS Keyframes</h1>
        <p class="page-description">CSS 키프레임으로 복잡한 애니메이션을 구현합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>@keyframes Rule</h3>
            <p>keyframes 정의</p>
          </div>
          <div class="content-item">
            <h3>Animation Properties</h3>
            <p>animation 관련 속성</p>
          </div>
          <div class="content-item">
            <h3>from & to</h3>
            <p>시작과 끝 상태</p>
          </div>
          <div class="content-item">
            <h3>Percentage Frames</h3>
            <p>퍼센트 기반 프레임</p>
          </div>
          <div class="content-item">
            <h3>Animation Events</h3>
            <p>animationstart, animationend</p>
          </div>
          <div class="content-item">
            <h3>복잡한 애니메이션</h3>
            <p>다중 키프레임 조합</p>
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
