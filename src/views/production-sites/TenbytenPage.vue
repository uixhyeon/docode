<template>
  <div class="tenbyten-page">
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
        <h1 class="main-title">🛒 텐바이텐</h1>
        <p class="subtitle">온라인 디자인 문구 쇼핑몰 클론 프로젝트</p>

        <div class="info-card">
          <h2>프로젝트 소개</h2>
          <p>
            텐바이텐(10x10)은 디자인 문구와 생활용품을 판매하는 온라인 쇼핑몰입니다.
            이 프로젝트는 텐바이텐의 주요 기능을 클론 코딩하여 이커머스 웹사이트의
            핵심 기능을 학습하고 구현한 프로젝트입니다.
          </p>
        </div>

        <div class="links-grid">
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">🌐</div>
            <div class="link-title">라이브 사이트</div>
            <div class="link-url">준비중</div>
          </a>
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">💻</div>
            <div class="link-title">GitHub</div>
            <div class="link-url">준비중</div>
          </a>
        </div>
      </section>

      <!-- 기술 스택 -->
      <section id="tech-stack" class="content-section">
        <h2>🛠 기술 스택</h2>

        <div class="tech-grid">
          <div class="tech-category">
            <h3>Frontend</h3>
            <ul>
              <li><strong>HTML/CSS</strong> - 반응형 레이아웃</li>
              <li><strong>JavaScript</strong> - 동적 기능 구현</li>
              <li><strong>jQuery</strong> - DOM 조작</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>Design</h3>
            <ul>
              <li><strong>반응형 디자인</strong> - 모바일/태블릿/데스크톱</li>
              <li><strong>CSS Grid & Flexbox</strong> - 레이아웃</li>
              <li><strong>이미지 최적화</strong> - 성능 개선</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>Features</h3>
            <ul>
              <li><strong>상품 목록</strong> - 그리드 레이아웃</li>
              <li><strong>슬라이더</strong> - 배너 이미지</li>
              <li><strong>필터링</strong> - 카테고리별 정렬</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 주요 기능 -->
      <section id="features" class="content-section">
        <h2>✨ 주요 기능</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏠</div>
            <h3>메인 페이지</h3>
            <p>배너 슬라이더, 카테고리별 상품 목록, 베스트 상품 등을 표시하는 메인 페이지</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📦</div>
            <h3>상품 목록</h3>
            <p>그리드 레이아웃으로 상품을 표시하고 카테고리별 필터링 기능 제공</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>상품 상세</h3>
            <p>상품 이미지, 가격, 설명, 옵션 선택 등 상세 정보 제공</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🛒</div>
            <h3>장바구니</h3>
            <p>선택한 상품을 장바구니에 담고 수량 조절 및 삭제 기능</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>반응형 디자인</h3>
            <p>모바일, 태블릿, 데스크톱 모든 화면 크기에 최적화된 레이아웃</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>UI/UX</h3>
            <p>텐바이텐의 감성적인 디자인을 그대로 재현한 사용자 인터페이스</p>
          </div>
        </div>
      </section>

      <!-- 구현 내용 -->
      <section id="implementation" class="content-section">
        <h2>💻 구현 내용</h2>

        <div class="code-explanation">
          <h3>1. 반응형 그리드 레이아웃</h3>
          <p>CSS Grid를 활용한 상품 목록 레이아웃 구현</p>
          <div class="code-block">
            <pre><code>.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}</code></pre>
          </div>
        </div>

        <div class="code-explanation">
          <h3>2. 이미지 슬라이더</h3>
          <p>메인 배너 자동 슬라이드 기능 구현</p>
          <div class="code-block">
            <pre><code>let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);</code></pre>
          </div>
        </div>

        <div class="code-explanation">
          <h3>3. 장바구니 기능</h3>
          <p>LocalStorage를 활용한 장바구니 데이터 관리</p>
          <div class="code-block">
            <pre><code>function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}</code></pre>
          </div>
        </div>
      </section>

      <!-- 학습 내용 -->
      <section id="learnings" class="content-section">
        <h2>📚 학습 내용</h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3>레이아웃 설계</h3>
              <ul>
                <li>CSS Grid와 Flexbox를 활용한 반응형 레이아웃</li>
                <li>모바일 우선 설계 방식 적용</li>
                <li>미디어 쿼리를 통한 반응형 구현</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3>JavaScript 인터랙션</h3>
              <ul>
                <li>이벤트 리스너를 통한 동적 기능 구현</li>
                <li>DOM 조작 및 데이터 바인딩</li>
                <li>비동기 처리와 이벤트 핸들링</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3>데이터 관리</h3>
              <ul>
                <li>LocalStorage를 활용한 클라이언트 데이터 저장</li>
                <li>JSON 형식의 데이터 구조 설계</li>
                <li>상태 관리 패턴 학습</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h3>사용자 경험</h3>
              <ul>
                <li>직관적인 네비게이션 구조</li>
                <li>부드러운 전환 애니메이션</li>
                <li>접근성을 고려한 UI 설계</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 개선 사항 -->
      <section id="improvements" class="content-section">
        <h2>🔮 향후 개선 사항</h2>

        <div class="future-grid">
          <div class="future-card">
            <div class="future-icon">⚛️</div>
            <h3>React 마이그레이션</h3>
            <p>React를 활용한 컴포넌트 기반 리팩토링</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🔐</div>
            <h3>사용자 인증</h3>
            <p>로그인/회원가입 기능 추가</p>
          </div>

          <div class="future-card">
            <div class="future-icon">💳</div>
            <h3>결제 시스템</h3>
            <p>실제 결제 프로세스 구현</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🚀</div>
            <h3>성능 최적화</h3>
            <p>이미지 레이지 로딩, 코드 스플리팅 적용</p>
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
  { id: 'tech-stack', title: '기술 스택' },
  { id: 'features', title: '주요 기능' },
  { id: 'implementation', title: '구현 내용' },
  { id: 'learnings', title: '학습 내용' },
  { id: 'improvements', title: '개선 사항' }
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
.tenbyten-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  padding-top: 80px;
}

// 고정 네비게이션
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

// 페이지 콘텐츠
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

// 정보 카드
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

// 링크 그리드
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

// 기술 그리드
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
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

// 기능 그리드
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
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

// 코드 블록
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

  p {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }
}

// 타임라인
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

// 향후 계획
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
}

.future-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.future-card h3 {
  margin-bottom: 0.75rem;
}

.future-card p {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
}

// 반응형
@media (max-width: 768px) {
  .tenbyten-page {
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
