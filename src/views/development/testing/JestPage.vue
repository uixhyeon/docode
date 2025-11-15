<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>✅ Jest</h1>
        <p class="page-description">Jest를 활용한 단위 테스트를 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Test Basics</h3>
            <p>테스트 작성 기초</p>
          </div>
          <div class="content-item">
            <h3>Matchers</h3>
            <p>매처 함수</p>
          </div>
          <div class="content-item">
            <h3>Mocking</h3>
            <p>모의 객체 생성</p>
          </div>
          <div class="content-item">
            <h3>Snapshots</h3>
            <p>스냅샷 테스트</p>
          </div>
          <div class="content-item">
            <h3>Async Testing</h3>
            <p>비동기 테스트</p>
          </div>
          <div class="content-item">
            <h3>Coverage</h3>
            <p>테스트 커버리지</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Jest', path: '/development/testing/jest', icon: '✅' },
  { name: 'Library', path: '/development/testing/library', icon: '🧪' },
  { name: 'E2E', path: '/development/testing/e2e', icon: '🎭' },
  { name: 'Visual', path: '/development/testing/visual', icon: '👁️' },
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
