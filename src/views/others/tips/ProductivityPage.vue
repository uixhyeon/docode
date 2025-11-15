<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⚡ 생산성 팁</h1>
        <p class="page-description">개발 생산성 향상을 위한 팁을 공유합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>시간 관리</h3>
            <p>Pomodoro 기법</p>
          </div>
          <div class="content-item">
            <h3>IDE 최적화</h3>
            <p>개발 환경 최적화</p>
          </div>
          <div class="content-item">
            <h3>Automation</h3>
            <p>작업 자동화</p>
          </div>
          <div class="content-item">
            <h3>모니터 설정</h3>
            <p>다중 모니터 활용</p>
          </div>
          <div class="content-item">
            <h3>참고 자료 관리</h3>
            <p>Note-taking 도구</p>
          </div>
          <div class="content-item">
            <h3>동료 협업</h3>
            <p>팀 협업 도구</p>
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
