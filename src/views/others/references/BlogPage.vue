<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📰 기술 블로그</h1>
        <p class="page-description">추천 기술 블로그와 아티클을 소개합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Dev.to</h3>
            <p>Dev.to 개발자 블로그</p>
          </div>
          <div class="content-item">
            <h3>Medium</h3>
            <p>Medium 기술 아티클</p>
          </div>
          <div class="content-item">
            <h3>개인 블로그</h3>
            <p>유명 개발자 블로그</p>
          </div>
          <div class="content-item">
            <h3>CSS-Tricks</h3>
            <p>CSS-Tricks 웹 디자인</p>
          </div>
          <div class="content-item">
            <h3>Smashing Magazine</h3>
            <p>Smashing Magazine</p>
          </div>
          <div class="content-item">
            <h3>기술 뉴스</h3>
            <p>Hacker News, Echo JS</p>
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
