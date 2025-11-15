<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>⚙️ tsconfig 설정</h1>
        <p class="page-description">TypeScript 설정 파일(tsconfig.json)을 이해하고 최적화합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Compiler Options</h3>
            <p>컴파일러 옵션 설정</p>
          </div>
          <div class="content-item">
            <h3>Target & Module</h3>
            <p>타겟 버전 및 모듈 시스템</p>
          </div>
          <div class="content-item">
            <h3>Strict Mode</h3>
            <p>엄격한 타입 체킹</p>
          </div>
          <div class="content-item">
            <h3>Path Mapping</h3>
            <p>경로 별칭 설정</p>
          </div>
          <div class="content-item">
            <h3>sourceMap</h3>
            <p>소스맵 생성</p>
          </div>
          <div class="content-item">
            <h3>프로젝트 참조</h3>
            <p>project references 설정</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Types', path: '/subjects/typescript/types', icon: '📘' },
  { name: 'Generics', path: '/subjects/typescript/generics', icon: '📦' },
  { name: 'Utility Types', path: '/subjects/typescript/utility', icon: '🔧' },
  { name: 'Config', path: '/subjects/typescript/config', icon: '⚙️' },
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
