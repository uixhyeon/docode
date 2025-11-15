<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🌐 Fetch API</h1>
        <p class="page-description">Fetch API를 활용한 HTTP 요청을 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>GET 요청</h3>
            <p>Fetch GET 메서드</p>
          </div>
          <div class="content-item">
            <h3>POST 요청</h3>
            <p>Fetch POST 메서드</p>
          </div>
          <div class="content-item">
            <h3>Headers</h3>
            <p>HTTP 헤더 설정</p>
          </div>
          <div class="content-item">
            <h3>Error Handling</h3>
            <p>오류 처리</p>
          </div>
          <div class="content-item">
            <h3>Timeouts</h3>
            <p>AbortController로 취소</p>
          </div>
          <div class="content-item">
            <h3>Interceptors</h3>
            <p>요청/응답 인터셉터</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Fetch', path: '/development/api/fetch', icon: '🌐' },
  { name: 'Query', path: '/development/api/query', icon: '📊' },
  { name: 'GraphQL', path: '/development/api/graphql', icon: '🔗' },
  { name: 'Auth', path: '/development/api/auth', icon: '🔐' },
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
