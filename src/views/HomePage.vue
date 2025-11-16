<template>
  <div class="home-page">
    <div class="hero">
      <h1 class="hero-title">🎓 코드카이브</h1>
      <p class="hero-subtitle">개인 학습용 코드 아카이브</p>
      <p class="hero-description">
        프론트엔드 개발에 필요한 다양한 기술과 패턴을 카테고리별로 정리한 학습 자료입니다.
      </p>
    </div>

    <div class="categories-grid">
      <router-link
        v-for="category in categories"
        :key="category.path"
        :to="category.path"
        class="category-card"
      >
        <div class="category-icon">{{ category.icon }}</div>
        <h3 class="category-title">{{ category.name }}</h3>
        <p class="category-description">{{ category.description }}</p>
        <div class="category-count">{{ category.count }}개 항목</div>
      </router-link>
    </div>

    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">7</div>
        <div class="stat-label">대분류</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">25+</div>
        <div class="stat-label">중분류</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">80+</div>
        <div class="stat-label">소분류</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    name: '📚 학습 자료',
    icon: '📚',
    path: '/learning-contents',
    description: '각 주제별 개념, 주요 코드, 설명을 확인하고 학습하세요',
    count: 15
  },
  {
    name: '📝 학습 기록',
    icon: '📝',
    path: '/learning-records',
    description: '날짜별로 학습 내용을 기록하고 관리하세요',
    count: 0
  },
  {
    name: '📖 과목/프레임워크',
    icon: '📖',
    path: '/subjects',
    description: 'HTML, CSS, JavaScript, TypeScript, React, Vue, Firebase 등',
    count: 35
  },
  {
    name: '🎨 UI/기능 구현',
    icon: '🎨',
    path: '/ui-features',
    description: '인터랙션, 레이아웃, 애니메이션, 차트 등',
    count: 20
  },
  {
    name: '🔧 기능 개발',
    icon: '🔧',
    path: '/development',
    description: '폼 처리, 데이터 관리, 라우팅, API, 인증 등',
    count: 25
  },
  {
    name: '🗂️ 기타',
    icon: '🗂️',
    path: '/others',
    description: 'Git, 배포, 개발 도구, 패키지 매니저 등',
    count: 15
  },
  {
    name: '🚀 제작 사이트',
    icon: '🚀',
    path: '/production-sites',
    description: '직접 제작한 프로젝트의 개발 과정과 코드 설명',
    count: 1
  }
]
</script>

<style lang="scss" scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.category-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #087ea4;
    box-shadow: 0 12px 24px rgba(8, 126, 164, 0.15);

    &::before {
      transform: scaleX(1);
    }

    .category-icon {
      transform: scale(1.2) rotate(10deg);
    }
  }
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.category-description {
  color: #6b7280;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.category-count {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: #f3f4f6;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #087ea4;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 16px;

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 2rem;
  }
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 600;
}
</style>
