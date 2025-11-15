<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⚙️ VS Code 팁</h1>
        <p class="page-description">VS Code 설정과 확장 프로그램을 소개합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>유용한 확장</h3>
            <p>VS Code 확장 프로그램</p>
          </div>
          <div class="content-item">
            <h3>테마 & 폰트</h3>
            <p>테마와 폰트 설정</p>
          </div>
          <div class="content-item">
            <h3>키보드 단축키</h3>
            <p>효율적인 단축키</p>
          </div>
          <div class="content-item">
            <h3>Snippets</h3>
            <p>코드 스니펫</p>
          </div>
          <div class="content-item">
            <h3>설정 (settings.json)</h3>
            <p>VS Code 설정</p>
          </div>
          <div class="content-item">
            <h3>Multi-cursor</h3>
            <p>다중 선택 및 편집</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'VS Code', path: '/others/tips/vscode', icon: '⚙️' },
  { name: 'Productivity', path: '/others/tips/productivity', icon: '⚡' },
  { name: 'Debugging', path: '/others/tips/debugging', icon: '🐛' },
  { name: 'Code Review', path: '/others/tips/review', icon: '👀' },
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
