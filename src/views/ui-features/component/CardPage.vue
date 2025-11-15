<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🃏 Card Component</h1>
        <p class="page-description">재사용 가능한 카드 컴포넌트를 만듭니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div class="content-item">
            <h3>Card Anatomy</h3>
            <p>카드 구조</p>
          </div>
          <div class="content-item">
            <h3>Header & Footer</h3>
            <p>헤더와 푸터</p>
          </div>
          <div class="content-item">
            <h3>Card Props</h3>
            <p>Props 설계</p>
          </div>
          <div class="content-item">
            <h3>Card Slots</h3>
            <p>슬롯 활용</p>
          </div>
          <div class="content-item">
            <h3>Elevation</h3>
            <p>그림자 효과</p>
          </div>
          <div class="content-item">
            <h3>Responsive</h3>
            <p>반응형 카드</p>
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
