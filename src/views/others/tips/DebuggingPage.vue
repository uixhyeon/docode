<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🐛 디버깅 팁</h1>
        <p class="page-description">효율적인 디버깅 기법과 팁을 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Console 메서드</h3>
            <p>console.log, assert 등</p>
          </div>
          <div class="content-item">
            <h3>Debugger 문</h3>
            <p>debugger 키워드</p>
          </div>
          <div class="content-item">
            <h3>중단점 팁</h3>
            <p>효율적인 중단점 사용</p>
          </div>
          <div class="content-item">
            <h3>Source Maps</h3>
            <p>소스맵 활용</p>
          </div>
          <div class="content-item">
            <h3>네트워크 디버깅</h3>
            <p>네트워크 이슈 해결</p>
          </div>
          <div class="content-item">
            <h3>메모리 누수</h3>
            <p>메모리 누수 찾기</p>
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
