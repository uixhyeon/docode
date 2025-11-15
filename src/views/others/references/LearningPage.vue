<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📚 학습 자료</h1>
        <p class="page-description">추천 학습 자료와 강좌를 소개합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Udemy</h3>
            <p>Udemy 온라인 강좌</p>
          </div>
          <div class="content-item">
            <h3>Coursera</h3>
            <p>Coursera 대학 강좌</p>
          </div>
          <div class="content-item">
            <h3>Codecademy</h3>
            <p>Codecademy 대화형 학습</p>
          </div>
          <div class="content-item">
            <h3>FreeCodeCamp</h3>
            <p>FreeCodeCamp 무료 강좌</p>
          </div>
          <div class="content-item">
            <h3>책 추천</h3>
            <p>추천 기술 서적</p>
          </div>
          <div class="content-item">
            <h3>온라인 커뮤니티</h3>
            <p>Dev.to, Hashnode 등</p>
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
