<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🎥 영상 강좌</h1>
        <p class="page-description">YouTube 및 영상 플랫폼 추천 강좌를 소개합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>YouTube Channels</h3>
            <p>유튜브 기술 채널</p>
          </div>
          <div class="content-item">
            <h3>Traversy Media</h3>
            <p>Traversy Media 웹 개발</p>
          </div>
          <div class="content-item">
            <h3>The Net Ninja</h3>
            <p>The Net Ninja 웹 개발</p>
          </div>
          <div class="content-item">
            <h3>Academind</h3>
            <p>Academind 프로그래밍</p>
          </div>
          <div class="content-item">
            <h3>Conference Talks</h3>
            <p>기술 컨퍼런스 발표</p>
          </div>
          <div class="content-item">
            <h3>한국 채널</h3>
            <p>한국 기술 유튜브</p>
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
