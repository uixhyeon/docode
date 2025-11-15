<template>
  <div class="home-page">
    <div class="hero">
      <h1 class="hero-title">💾 코드카이브</h1>
      <p class="hero-subtitle">개인 학습용 코드 아카이브</p>
      <p class="hero-description">
        프론트엔드 개발에 필요한 다양한 기술과 패턴을 정리한 학습 자료입니다.
      </p>
    </div>

    <div class="welcome-message">
      <p>
        좌측 사이드바에서 원하는 카테고리를 선택하면 해당 학습 자료를 볼 수 있습니다.
      </p>
      <p>
        각 중분류를 클릭하면 소분류 목록이 펼쳐지며, 소분류를 클릭하면 상세 내용을 확인할 수 있습니다.
      </p>
    </div>

    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">4</div>
        <div class="stat-label">대분류</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">24+</div>
        <div class="stat-label">중분류</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">70+</div>
        <div class="stat-label">소분류</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
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

.welcome-message {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  line-height: 1.8;

  p {
    margin-bottom: 1rem;
    color: #374151;

    &:last-child {
      margin-bottom: 0;
    }
  }
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
