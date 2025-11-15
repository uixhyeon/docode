<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🐛 Debugging Tools</h1>
        <p class="page-description">디버깅 도구와 기법을 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Chrome DevTools</h3>
            <p>Chrome 개발자 도구</p>
          </div>
          <div class="content-item">
            <h3>Browser Console</h3>
            <p>콘솔 로깅</p>
          </div>
          <div class="content-item">
            <h3>Breakpoints</h3>
            <p>중단점 설정</p>
          </div>
          <div class="content-item">
            <h3>Performance Panel</h3>
            <p>성능 분석</p>
          </div>
          <div class="content-item">
            <h3>Network Tab</h3>
            <p>네트워크 모니터링</p>
          </div>
          <div class="content-item">
            <h3>Remote Debugging</h3>
            <p>원격 디버깅</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Package', path: '/others/tools/package', icon: '📦' },
  { name: 'Build', path: '/others/tools/build', icon: '🏗️' },
  { name: 'Dev', path: '/others/tools/dev', icon: '🔧' },
  { name: 'Debug', path: '/others/tools/debug', icon: '🐛' },
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
