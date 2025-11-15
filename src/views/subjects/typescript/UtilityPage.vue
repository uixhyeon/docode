<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🔧 Utility Types</h1>
        <p class="page-description">TypeScript 유틸리티 타입을 활용한 고급 타입 정의를 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Partial & Required</h3>
            <p>속성의 필수 여부 변경</p>
          </div>
          <div class="content-item">
            <h3>Readonly & Record</h3>
            <p>읽기 전용과 기록 타입</p>
          </div>
          <div class="content-item">
            <h3>Pick & Omit</h3>
            <p>선택적 속성 추출</p>
          </div>
          <div class="content-item">
            <h3>Exclude & Extract</h3>
            <p>합집합에서 타입 제외/추출</p>
          </div>
          <div class="content-item">
            <h3>ReturnType & Parameters</h3>
            <p>함수 타입 정보 추출</p>
          </div>
          <div class="content-item">
            <h3>Awaited & ThisType</h3>
            <p>Promise와 this 타입</p>
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
