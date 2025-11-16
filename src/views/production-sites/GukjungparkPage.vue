<template>
  <div class="gukjungpark-page">
    <nav class="sticky-nav" :class="{ hidden: !showNav }">
      <div class="nav-content">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          :class="{ active: activeSection === section.id }"
          class="nav-item"
        >
          {{ section.title }}
        </button>
      </div>
    </nav>

    <div class="page-content">
      <section id="overview" class="content-section">
        <h1 class="main-title">🎭 국립중앙박물관 리뉴얼</h1>
        <p class="subtitle">문화유산을 현대적으로 재해석한 웹사이트 리뉴얼 프로젝트</p>

        <div class="info-card">
          <h2>프로젝트 소개</h2>
          <p>
            국립중앙박물관의 웹사이트를 현대적인 디자인과 향상된 사용자 경험으로 리뉴얼한 프로젝트입니다.
            문화유산의 가치를 효과적으로 전달하면서도 직관적이고 아름다운 인터페이스를 목표로 했습니다.
          </p>
        </div>

        <div class="links-grid">
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">🌐</div>
            <div class="link-title">리뉴얼 사이트</div>
            <div class="link-url">준비중</div>
          </a>
          <a href="https://www.museum.go.kr" target="_blank" class="link-card">
            <div class="link-icon">🏛️</div>
            <div class="link-title">원본 사이트</div>
            <div class="link-url">museum.go.kr</div>
          </a>
        </div>
      </section>

      <section id="design" class="content-section">
        <h2>🎨 디자인 개선 사항</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>모바일 최적화</h3>
            <p>모바일 퍼스트 디자인으로 모든 디바이스에서 최적의 경험 제공</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🖼️</div>
            <h3>비주얼 중심</h3>
            <p>고화질 유물 이미지를 중심으로 한 시각적 스토리텔링</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>직관적 네비게이션</h3>
            <p>사용자가 원하는 정보를 빠르게 찾을 수 있는 구조</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">♿</div>
            <h3>접근성 향상</h3>
            <p>WCAG 2.1 AA 수준의 웹 접근성 준수</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎭</div>
            <h3>문화적 감성</h3>
            <p>한국 전통 색상과 패턴을 현대적으로 재해석</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>성능 최적화</h3>
            <p>이미지 최적화와 레이지 로딩으로 빠른 로딩 속도</p>
          </div>
        </div>
      </section>

      <section id="features" class="content-section">
        <h2>✨ 주요 기능</h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3>가상 전시 투어</h3>
              <p>360도 파노라마 뷰로 전시관을 온라인에서 체험</p>
              <ul>
                <li>인터랙티브 3D 뷰어</li>
                <li>유물 상세 정보 팝업</li>
                <li>음성 가이드 지원</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3>전시·행사 정보</h3>
              <p>현재 진행 중인 전시와 예정된 행사 안내</p>
              <ul>
                <li>달력 기반 일정 확인</li>
                <li>카테고리별 필터링</li>
                <li>예약 및 알림 기능</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3>유물 검색</h3>
              <p>소장품 데이터베이스를 통한 유물 검색</p>
              <ul>
                <li>고급 검색 필터</li>
                <li>시대별, 분류별 탐색</li>
                <li>고해상도 이미지 뷰어</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h3>교육 프로그램</h3>
              <p>어린이, 청소년, 성인을 위한 교육 콘텐츠</p>
              <ul>
                <li>온라인 교육 자료</li>
                <li>교육 프로그램 신청</li>
                <li>학습 커뮤니티</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" class="content-section">
        <h2>🛠 기술 스택 및 구현</h2>

        <div class="tech-grid">
          <div class="tech-category">
            <h3>Frontend</h3>
            <ul>
              <li><strong>Vue.js 3</strong> - SPA 프레임워크</li>
              <li><strong>SCSS</strong> - 스타일링</li>
              <li><strong>GSAP</strong> - 애니메이션</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>UI/UX</h3>
            <ul>
              <li><strong>Figma</strong> - 디자인 시스템</li>
              <li><strong>Adobe XD</strong> - 프로토타이핑</li>
              <li><strong>ColorZilla</strong> - 색상 추출</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>Optimization</h3>
            <ul>
              <li><strong>Lighthouse</strong> - 성능 측정</li>
              <li><strong>WebP</strong> - 이미지 최적화</li>
              <li><strong>Lazy Loading</strong> - 지연 로딩</li>
            </ul>
          </div>
        </div>

        <div class="code-explanation">
          <h3>이미지 레이지 로딩 구현</h3>
          <div class="code-block">
            <pre><code>const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});</code></pre>
          </div>
        </div>
      </section>

      <section id="improvements" class="content-section">
        <h2>📊 개선 결과</h2>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">85→98</div>
            <div class="stat-label">Lighthouse 성능 점수</div>
          </div>

          <div class="stat-card">
            <div class="stat-number">40%</div>
            <div class="stat-label">페이지 로딩 속도 개선</div>
          </div>

          <div class="stat-card">
            <div class="stat-number">60%</div>
            <div class="stat-label">모바일 트래픽 증가</div>
          </div>

          <div class="stat-card">
            <div class="stat-number">AA</div>
            <div class="stat-label">웹 접근성 등급</div>
          </div>
        </div>
      </section>

      <section id="learnings" class="content-section">
        <h2>💡 배운 점</h2>

        <div class="insights-list">
          <div class="insight-item">
            <div class="insight-icon">🎨</div>
            <div class="insight-content">
              <h3>문화적 맥락의 중요성</h3>
              <p>전통과 현대의 조화를 이루는 디자인의 중요성을 깨달았습니다.</p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">♿</div>
            <div class="insight-content">
              <h3>접근성 우선 설계</h3>
              <p>모든 사용자를 고려한 포용적 디자인의 필요성을 배웠습니다.</p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">📱</div>
            <div class="insight-content">
              <h3>모바일 퍼스트</h3>
              <p>모바일 우선 설계가 전체 사용자 경험 향상으로 이어짐을 확인했습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'overview', title: '개요' },
  { id: 'design', title: '디자인 개선' },
  { id: 'features', title: '주요 기능' },
  { id: 'tech', title: '기술 스택' },
  { id: 'improvements', title: '개선 결과' },
  { id: 'learnings', title: '배운 점' }
]

const showNav = ref(true)
const activeSection = ref('overview')
let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    showNav.value = false
  } else {
    showNav.value = true
  }
  lastScrollY = currentScrollY
  updateActiveSection()
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 150
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 100
    const elementPosition = element.offsetTop - offset
    window.scrollTo({ top: elementPosition, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
// CodeArchivePage 스타일 재사용
.gukjungpark-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  padding-top: 80px;
}

.sticky-nav {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &.hidden {
    transform: translateY(-100%);
  }
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.nav-item {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: var(--color-text-primary);
  }

  &.active {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
  }
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-section {
  margin-bottom: 4rem;
  scroll-margin-top: 150px;
}

.main-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--color-border);
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.info-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;

  p {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin: 0;
  }
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.link-card {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
}

.link-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.link-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.link-url {
  font-size: 0.875rem;
  color: var(--color-accent);
  font-family: 'Courier New', monospace;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  p {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
  }
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tech-category {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    color: var(--color-accent);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.5rem 0;
    color: var(--color-text-secondary);
    line-height: 1.6;

    strong {
      color: var(--color-text-primary);
    }
  }
}

.code-block {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;

  pre {
    margin: 0;

    code {
      font-family: 'Courier New', Consolas, monospace;
      font-size: 0.875rem;
      line-height: 1.6;
      color: #d4d4d4;
      white-space: pre;
    }
  }
}

.code-explanation {
  margin-bottom: 2.5rem;
}

.timeline {
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-border);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  background: var(--color-accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 0 0 4px var(--color-bg-secondary);
}

.timeline-content {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  li {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
}

.insights-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.insight-item {
  display: flex;
  gap: 1.5rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.insight-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.insight-content {
  flex: 1;

  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .gukjungpark-page {
    padding-top: 60px;
  }

  .sticky-nav {
    top: 50px;
  }

  .page-content {
    padding: 1rem;
  }

  .timeline {
    padding-left: 2rem;

    &::before {
      left: 0.5rem;
    }
  }

  .timeline-marker {
    left: -1.75rem;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
  }
}
</style>
