<template>
  <div class="clonecoding-page">
    <!-- 스크롤 기반 고정 네비게이션 -->
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
      <!-- 프로젝트 개요 -->
      <section id="overview" class="content-section">
        <h1 class="main-title">💻 클론코딩 프로젝트</h1>
        <p class="subtitle">다양한 웹사이트 클론코딩을 통한 실전 학습</p>

        <div class="info-card">
          <h2>프로젝트 소개</h2>
          <p>
            실제 운영 중인 다양한 웹사이트를 클론 코딩하며 웹 개발의 핵심 개념과 기술을 학습한 프로젝트 모음입니다.
            각 프로젝트를 통해 레이아웃 설계, JavaScript 활용, 반응형 디자인 등 실무에 필요한 다양한 기술을 익혔습니다.
          </p>
        </div>

        <div class="links-grid">
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">🌐</div>
            <div class="link-title">프로젝트 모음</div>
            <div class="link-url">준비중</div>
          </a>
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">💻</div>
            <div class="link-title">GitHub</div>
            <div class="link-url">준비중</div>
          </a>
        </div>
      </section>

      <!-- 클론한 사이트 목록 -->
      <section id="projects" class="content-section">
        <h2>🎯 클론 사이트 목록</h2>

        <div class="projects-grid">
          <div class="project-item">
            <div class="project-number">01</div>
            <div class="project-content">
              <h3>YouTube 클론</h3>
              <p class="project-desc">동영상 플레이어, 댓글 시스템, 추천 알고리즘 UI</p>
              <div class="tech-tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
              </div>
            </div>
          </div>

          <div class="project-item">
            <div class="project-number">02</div>
            <div class="project-content">
              <h3>Netflix 클론</h3>
              <p class="project-desc">캐러셀 슬라이더, 카테고리별 콘텐츠, 모달 창</p>
              <div class="tech-tags">
                <span class="tag">React</span>
                <span class="tag">SCSS</span>
                <span class="tag">API</span>
              </div>
            </div>
          </div>

          <div class="project-item">
            <div class="project-number">03</div>
            <div class="project-content">
              <h3>Instagram 클론</h3>
              <p class="project-desc">피드, 스토리, 좋아요/댓글 기능</p>
              <div class="tech-tags">
                <span class="tag">Vue</span>
                <span class="tag">Firebase</span>
                <span class="tag">CSS Grid</span>
              </div>
            </div>
          </div>

          <div class="project-item">
            <div class="project-number">04</div>
            <div class="project-content">
              <h3>Apple 클론</h3>
              <p class="project-desc">스크롤 애니메이션, 제품 쇼케이스, 반응형 네비게이션</p>
              <div class="tech-tags">
                <span class="tag">HTML/CSS</span>
                <span class="tag">GSAP</span>
                <span class="tag">Intersection Observer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 주요 학습 내용 -->
      <section id="learnings" class="content-section">
        <h2>📚 주요 학습 내용</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📐</div>
            <h3>레이아웃 설계</h3>
            <p>Flexbox, Grid, Position을 활용한 복잡한 레이아웃 구현 능력 향상</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>CSS 기법</h3>
            <p>애니메이션, 트랜지션, 의사 요소를 활용한 동적 스타일링</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>이벤트 핸들링, DOM 조작, 비동기 처리 등 핵심 개념 이해</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>반응형 디자인</h3>
            <p>미디어 쿼리와 유동적 레이아웃을 통한 다양한 디바이스 대응</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>API 연동</h3>
            <p>RESTful API 호출 및 데이터 바인딩 실습</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>성능 최적화</h3>
            <p>이미지 최적화, 레이지 로딩, 코드 분할 기법 적용</p>
          </div>
        </div>
      </section>

      <!-- 기술적 도전 -->
      <section id="challenges" class="content-section">
        <h2>💡 기술적 도전과 해결</h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3>무한 스크롤 구현</h3>
              <p class="challenge-desc">문제: 대량의 콘텐츠를 효율적으로 로딩하는 방법</p>
              <p class="solution-desc">해결: Intersection Observer API를 활용한 무한 스크롤 및 가상 스크롤링 구현</p>
              <div class="code-block">
                <pre><code>const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreContent();
    }
  });
});

observer.observe(document.querySelector('.loading-trigger'));</code></pre>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3>스크롤 애니메이션</h3>
              <p class="challenge-desc">문제: 부드러운 스크롤 기반 애니메이션 구현</p>
              <p class="solution-desc">해결: GSAP ScrollTrigger를 활용한 스크롤 애니메이션</p>
              <div class="code-block">
                <pre><code>gsap.to('.product', {
  scrollTrigger: {
    trigger: '.product',
    start: 'top center',
    end: 'bottom center',
    scrub: 1
  },
  scale: 1.2,
  opacity: 1
});</code></pre>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3>반응형 네비게이션</h3>
              <p class="challenge-desc">문제: 모바일과 데스크톱에서 다른 형태의 네비게이션</p>
              <p class="solution-desc">해결: CSS 미디어 쿼리와 JavaScript를 조합한 하이브리드 접근</p>
              <div class="code-block">
                <pre><code>@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .nav-mobile {
    display: flex;
  }
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 배운 점 -->
      <section id="insights" class="content-section">
        <h2>✨ 배운 점과 인사이트</h2>

        <div class="insights-list">
          <div class="insight-item">
            <div class="insight-icon">💡</div>
            <div class="insight-content">
              <h3>실전 코드 분석의 중요성</h3>
              <p>
                실제 서비스의 코드를 분석하며 프로덕션 레벨의 코드 구조와 패턴을 학습했습니다.
                이론으로만 배웠던 개념들이 실제로 어떻게 적용되는지 이해할 수 있었습니다.
              </p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">🎯</div>
            <div class="insight-content">
              <h3>디테일의 중요성</h3>
              <p>
                작은 인터랙션, 애니메이션, 간격 하나하나가 사용자 경험에 큰 영향을 미친다는 것을 깨달았습니다.
                완성도 높은 UI/UX를 위해서는 세심한 주의가 필요합니다.
              </p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">🔧</div>
            <div class="insight-content">
              <h3>문제 해결 능력 향상</h3>
              <p>
                클론 코딩 과정에서 마주한 다양한 기술적 문제들을 해결하며 디버깅 능력과
                문제 해결 능력이 크게 향상되었습니다.
              </p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">📖</div>
            <div class="insight-content">
              <h3>지속적인 학습</h3>
              <p>
                웹 기술은 빠르게 발전하므로 지속적인 학습이 필수적입니다.
                클론 코딩을 통해 최신 트렌드와 기술을 습득하는 습관을 기를 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 향후 계획 -->
      <section id="future" class="content-section">
        <h2>🔮 향후 계획</h2>

        <div class="future-grid">
          <div class="future-card">
            <div class="future-icon">⚛️</div>
            <h3>프레임워크 심화</h3>
            <p>React, Vue의 고급 패턴과 상태 관리 학습</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🔐</div>
            <h3>백엔드 연동</h3>
            <p>Node.js, Express를 활용한 풀스택 프로젝트</p>
          </div>

          <div class="future-card">
            <div class="future-icon">📱</div>
            <h3>모바일 앱</h3>
            <p>React Native로 모바일 앱 클론 도전</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🧪</div>
            <h3>테스트 코드</h3>
            <p>Jest, Testing Library를 활용한 테스트 작성</p>
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
  { id: 'projects', title: '클론 사이트' },
  { id: 'learnings', title: '학습 내용' },
  { id: 'challenges', title: '기술적 도전' },
  { id: 'insights', title: '배운 점' },
  { id: 'future', title: '향후 계획' }
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

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
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
.clonecoding-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  padding-top: 80px;
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
}

.project-item {
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
    transform: translateX(8px);
  }
}

.project-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-accent);
  opacity: 0.3;
  min-width: 60px;
}

.project-content {
  flex: 1;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
}

.project-desc {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--color-bg-tertiary);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--color-accent);
  font-weight: 500;
}

.challenge-desc {
  color: #d73a49;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.solution-desc {
  color: #22863a;
  font-weight: 600;
  margin-bottom: 1rem;
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

// 나머지 공통 스타일은 CodeArchivePage와 동일
.sticky-nav,
.nav-content,
.nav-item,
.page-content,
.content-section,
.main-title,
.subtitle,
h2,
h3,
.info-card,
.links-grid,
.link-card,
.link-icon,
.link-title,
.link-url,
.features-grid,
.feature-card,
.feature-icon,
.code-block,
.timeline,
.timeline-item,
.timeline-marker,
.timeline-content,
.future-grid,
.future-card,
.future-icon {
  // CodeArchivePage.vue의 스타일 재사용
}

// 스크롤 네비게이션
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
  -ms-overflow-style: none;
  scrollbar-width: none;
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
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.future-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
    line-height: 1.6;
    margin: 0;
  }
}

.future-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .clonecoding-page {
    padding-top: 60px;
  }

  .sticky-nav {
    top: 50px;
  }

  .nav-item {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }

  .page-content {
    padding: 1rem;
  }

  .project-item {
    flex-direction: column;
  }

  .project-number {
    font-size: 1.5rem;
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
