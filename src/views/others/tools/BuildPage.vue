<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🏗️ Build Tools</h1>
        <p class="page-description">Webpack, Vite 등 빌드 도구를 다룹니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Webpack</h3>
            <p>Webpack 모듈 번들러</p>
          </div>
          <div class="content-item">
            <h3>Vite</h3>
            <p>Vite 빌드 도구</p>
          </div>
          <div class="content-item">
            <h3>Rollup</h3>
            <p>Rollup 번들러</p>
          </div>
          <div class="content-item">
            <h3>Parcel</h3>
            <p>Parcel 빠른 번들러</p>
          </div>
          <div class="content-item">
            <h3>Configuration</h3>
            <p>빌드 설정</p>
          </div>
          <div class="content-item">
            <h3>Plugins</h3>
            <p>플러그인 개발</p>
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
