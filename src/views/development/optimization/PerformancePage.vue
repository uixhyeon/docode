<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⚡ Web Performance</h1>
        <p class="page-description">웹 성능 지표와 최적화를 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Core Web Vitals</h3>
            <p>LCP, FID, CLS</p>
          </div>
          <div class="content-item">
            <h3>Performance API</h3>
            <p>Performance 측정</p>
          </div>
          <div class="content-item">
            <h3>Lighthouse</h3>
            <p>Lighthouse 도구</p>
          </div>
          <div class="content-item">
            <h3>Network Optimization</h3>
            <p>네트워크 최적화</p>
          </div>
          <div class="content-item">
            <h3>Caching Strategy</h3>
            <p>캐싱 전략</p>
          </div>
          <div class="content-item">
            <h3>Monitoring</h3>
            <p>성능 모니터링</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Render', path: '/development/optimization/render', icon: '🎨' },
  { name: 'Bundle', path: '/development/optimization/bundle', icon: '📦' },
  { name: 'Image', path: '/development/optimization/image', icon: '🖼️' },
  { name: 'Performance', path: '/development/optimization/performance', icon: '⚡' },
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
