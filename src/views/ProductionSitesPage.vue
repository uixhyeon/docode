<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="page-icon">🚀</span>
        제작 사이트
      </h1>
      <p class="page-description">
        직접 제작한 프로젝트의 개발 과정과 코드 아키텍처를 공유합니다.
      </p>
    </div>

    <div class="categories">
      <router-link
        to="/production-sites/code-archive"
        class="category-section"
      >
        <div class="category-header">
          <div class="category-info">
            <span class="category-icon">📦</span>
            <h2 class="category-name">코드 아카이브</h2>
          </div>
          <div class="category-description">
            이 프로젝트의 제작 과정과 주요 기능 설명
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 3rem;
  text-align: center;
}

.page-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.page-icon {
  font-size: 3rem;
}

.page-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-section {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  text-decoration: none;
  display: block;

  &:hover {
    border-color: #087ea4;
    box-shadow: 0 4px 12px rgba(8, 126, 164, 0.15);
    transform: translateY(-2px);
  }
}

.category-header {
  padding: 1.5rem;
}

.category-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.category-icon {
  font-size: 1.75rem;
}

.category-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.category-description {
  font-size: 0.9375rem;
  color: #6b7280;
  padding-left: 2.75rem;
  line-height: 1.6;
}
</style>
