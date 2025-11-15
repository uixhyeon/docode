<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📘 공식 문서</h1>
        <p class="page-description">각 기술의 공식 문서를 활용하는 방법을 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>React Docs</h3>
            <p>React 공식 문서</p>
          </div>
          <div class="content-item">
            <h3>Vue Docs</h3>
            <p>Vue 공식 문서</p>
          </div>
          <div class="content-item">
            <h3>MDN Web Docs</h3>
            <p>MDN 웹 문서</p>
          </div>
          <div class="content-item">
            <h3>TypeScript Handbook</h3>
            <p>TypeScript 핸드북</p>
          </div>
          <div class="content-item">
            <h3>JavaScript.info</h3>
            <p>JavaScript 튜토리얼</p>
          </div>
          <div class="content-item">
            <h3>문서 읽기 팁</h3>
            <p>효율적인 문서 읽기</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Docs', path: '/others/references/docs', icon: '📘' },
  { name: 'Learning', path: '/others/references/learning', icon: '📚' },
  { name: 'Blog', path: '/others/references/blog', icon: '📰' },
  { name: 'Video', path: '/others/references/video', icon: '🎥' },
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
