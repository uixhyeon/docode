<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📦 Generics (제네릭)</h1>
        <p class="page-description">제네릭을 활용한 재사용 가능한 컴포넌트 개발을 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Generic Functions</h3>
            <p>제네릭 함수 작성</p>
          </div>
          <div class="content-item">
            <h3>Generic Classes</h3>
            <p>제네릭 클래스</p>
          </div>
          <div class="content-item">
            <h3>Generic Constraints</h3>
            <p>제약 조건 추가</p>
          </div>
          <div class="content-item">
            <h3>Keyof</h3>
            <p>객체 키 타입 추출</p>
          </div>
          <div class="content-item">
            <h3>Conditional Types</h3>
            <p>조건부 타입</p>
          </div>
          <div class="content-item">
            <h3>Generic Patterns</h3>
            <p>제네릭 패턴 및 활용법</p>
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
