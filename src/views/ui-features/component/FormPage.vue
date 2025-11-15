<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>📝 Form Component</h1>
        <p class="page-description">폼 입력 요소와 검증을 구현합니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Input Field</h3>
            <p>텍스트 입력 필드</p>
          </div>
          <div class="content-item">
            <h3>Select & Checkbox</h3>
            <p>선택 요소</p>
          </div>
          <div class="content-item">
            <h3>Textarea</h3>
            <p>텍스트 영역</p>
          </div>
          <div class="content-item">
            <h3>Form Validation</h3>
            <p>폼 검증</p>
          </div>
          <div class="content-item">
            <h3>Error Messages</h3>
            <p>오류 메시지 표시</p>
          </div>
          <div class="content-item">
            <h3>Form Libraries</h3>
            <p>React Hook Form, Formik 등</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import TabNavigation from '../../../components/TabNavigation.vue'

const tabs = [
  { name: 'Button', path: '/ui-features/component/button', icon: '🔘' },
  { name: 'Form', path: '/ui-features/component/form', icon: '📝' },
  { name: 'Card', path: '/ui-features/component/card', icon: '🃏' },
  { name: 'Notification', path: '/ui-features/component/notification', icon: '🔔' },
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
