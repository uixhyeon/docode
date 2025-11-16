<template>
  <div class="code-archive-page">
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
        <h1 class="main-title">📦 코드 아카이브</h1>
        <p class="subtitle">개발자를 위한 코드 스니펫 및 학습 노트 관리 애플리케이션</p>

        <div class="info-card">
          <h2>프로젝트 소개</h2>
          <p>
            DoCode는 개발 중 작성한 코드와 학습 내용을 체계적으로 정리하고 관리할 수 있는 웹 애플리케이션입니다.
            프론트엔드 개발에 필요한 다양한 기술과 패턴을 카테고리별로 정리하고,
            코드 스니펫을 작성하여 언제든지 참고할 수 있도록 구성했습니다.
          </p>
        </div>

        <div class="links-grid">
          <a href="https://code-archive-f7f9d.web.app" target="_blank" class="link-card">
            <div class="link-icon">🌐</div>
            <div class="link-title">라이브 사이트</div>
            <div class="link-url">code-archive-f7f9d.web.app</div>
          </a>
          <a href="https://github.com/uixhyeon/docode" target="_blank" class="link-card">
            <div class="link-icon">💻</div>
            <div class="link-title">GitHub</div>
            <div class="link-url">github.com/uixhyeon/docode</div>
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
              <li><strong>Vue 3</strong> - Composition API 사용</li>
              <li><strong>Vue Router</strong> - SPA 라우팅</li>
              <li><strong>SCSS</strong> - 스타일링</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>Backend & Infrastructure</h3>
            <ul>
              <li><strong>Firebase Authentication</strong> - 사용자 인증</li>
              <li><strong>Firestore</strong> - NoSQL 데이터베이스</li>
              <li><strong>Firebase Hosting</strong> - 배포</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>Build Tools</h3>
            <ul>
              <li><strong>Vite</strong> - 빠른 개발 서버 및 빌드</li>
              <li><strong>npm</strong> - 패키지 관리</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 주요 기능 -->
      <section id="features" class="content-section">
        <h2>✨ 주요 기능</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>코드 작성 및 관리</h3>
            <p>주제별로 코드 스니펫을 작성하고 저장할 수 있습니다. 카테고리와 서브카테고리로 구조화된 관리가 가능합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Syntax Highlighting</h3>
            <p>JavaScript, TypeScript, Python, Vue, React 등 다양한 프로그래밍 언어의 문법 강조를 지원합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📄</div>
            <h3>발췌 기능</h3>
            <p>원본 문서에서 필요한 부분만 라인 단위로 선택하여 발췌할 수 있습니다. 드래그로 쉽게 선택 가능합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔗</div>
            <h3>임베드 지원</h3>
            <p>CodePen, CodeSandbox, Vercel 등 외부 코드 실행 환경을 iframe으로 임베드할 수 있습니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔐</div>
            <h3>사용자 인증</h3>
            <p>Firebase Authentication을 통한 안전한 로그인 시스템을 구축했습니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">☁️</div>
            <h3>클라우드 저장</h3>
            <p>Firestore를 통해 데이터를 클라우드에 저장하고 실시간으로 동기화합니다.</p>
          </div>
        </div>
      </section>

      <!-- 프로젝트 구조 -->
      <section id="structure" class="content-section">
        <h2>📁 프로젝트 구조</h2>

        <div class="code-block">
          <pre><code>docode/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header.vue       # 헤더 (로그인/로그아웃, 다크모드)
│   │   ├── MDNSidebar.vue   # 사이드바 네비게이션
│   │   └── TabNavigation.vue # 탭 네비게이션
│   ├── composables/         # Vue Composables
│   │   └── useArticles.js   # Firestore 아티클 CRUD 로직
│   ├── firebase/            # Firebase 설정
│   │   ├── config.js        # Firebase 초기화 및 인증
│   │   └── firestore.js     # Firestore CRUD 함수
│   ├── router/              # Vue Router
│   │   └── index.js         # 라우팅 설정 및 인증 가드
│   ├── styles/              # 전역 스타일
│   │   ├── main.scss        # 메인 스타일
│   │   └── variables.scss   # SCSS 변수 (색상, 테마)
│   ├── views/               # 페이지 컴포넌트
│   │   ├── HomePage.vue     # 메인 페이지
│   │   ├── WritePage.vue    # 글쓰기 페이지
│   │   ├── ArticlePage.vue  # 글 상세 페이지
│   │   └── subjects/        # 카테고리별 페이지
│   └── main.js              # Vue 앱 진입점
└── vite.config.js           # Vite 설정 (경로 별칭 등)</code></pre>
        </div>
      </section>

      <!-- 핵심 코드 설명 -->
      <section id="code" class="content-section">
        <h2>💻 핵심 코드 설명</h2>

        <div class="code-explanation">
          <h3>1. Firebase 설정 (config.js)</h3>
          <p>Firebase 프로젝트 초기화 및 인증 설정을 담당합니다.</p>
          <div class="code-block">
            <pre><code>import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "...",
  authDomain: "code-archive-f7f9d.firebaseapp.com",
  projectId: "code-archive-f7f9d",
  // ...
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)</code></pre>
          </div>
          <ul class="explanation-list">
            <li><code>initializeApp()</code>으로 Firebase 앱 초기화</li>
            <li><code>getAuth()</code>로 인증 인스턴스 생성</li>
            <li><code>getFirestore()</code>로 Firestore 데이터베이스 인스턴스 생성</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>2. Firestore CRUD (firestore.js)</h3>
          <p>Firestore 데이터베이스의 CRUD 작업을 처리하는 함수들입니다.</p>
          <div class="code-block">
            <pre><code>// 글 저장
export const saveArticle = async (userId, articleData) => {
  const docRef = await addDoc(
    collection(db, 'users', userId, 'articles'),
    articleData
  )
  return docRef.id
}

// 글 목록 조회
export const getArticles = async (userId, filters) => {
  let q = collection(db, 'users', userId, 'articles')

  if (filters.category) {
    q = query(q, where('category', '==', filters.category))
  }

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li><code>addDoc()</code>으로 새 문서 추가</li>
            <li><code>query()</code>와 <code>where()</code>로 필터링된 쿼리 생성</li>
            <li>사용자별로 독립된 컬렉션 구조 (<code>users/{userId}/articles</code>)</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>3. Vue Composable (useArticles.js)</h3>
          <p>글 목록을 관리하는 재사용 가능한 로직입니다.</p>
          <div class="code-block">
            <pre><code>export const useArticles = (category, subcategory, page) => {
  const articles = ref([])
  const auth = getAuth()

  const loadArticles = async () => {
    const user = auth.currentUser
    if (!user) return

    const filters = { category, subcategory, page }
    articles.value = await getArticles(user.uid, filters)
  }

  const getArticles = (topicId) => {
    return articles.value.filter(
      article => article.topicId === topicId
    )
  }

  loadArticles()

  return { articles, getArticles }
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li>Vue Composition API의 <code>ref()</code>로 반응형 상태 관리</li>
            <li>카테고리별로 필터링된 글 목록 제공</li>
            <li>여러 컴포넌트에서 재사용 가능한 로직 추상화</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>4. 라우터 인증 가드 (router/index.js)</h3>
          <p>페이지 접근 전 사용자 인증 상태를 확인합니다.</p>
          <div class="code-block">
            <pre><code>router.beforeEach(async (to, from, next) => {
  // Auth 상태 초기화 대기
  if (!authReady) {
    await new Promise(resolve => {
      const unsubscribe = auth.onAuthStateChanged(() => {
        unsubscribe()
        resolve()
      })
    })
  }

  const user = auth.currentUser

  // 로그인 페이지가 아니면 모두 인증 필요
  if (to.path !== '/login' && to.path !== '/signup' && !user) {
    next('/login')
  } else {
    next()
  }
})</code></pre>
          </div>
          <ul class="explanation-list">
            <li><code>beforeEach()</code>로 모든 라우트 변경 전 가드 실행</li>
            <li><code>onAuthStateChanged()</code>로 인증 상태 초기화 대기</li>
            <li>미인증 사용자는 로그인 페이지로 리다이렉트</li>
          </ul>
        </div>
      </section>

      <!-- 개발 과정 -->
      <section id="process" class="content-section">
        <h2>🚀 개발 과정</h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3>프로젝트 초기 설정</h3>
              <ul>
                <li>Vite + Vue 3 프로젝트 생성</li>
                <li>Firebase 프로젝트 생성 및 설정</li>
                <li>기본 라우팅 및 레이아웃 구성</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3>인증 시스템 구현</h3>
              <ul>
                <li>Firebase Authentication 연동</li>
                <li>로그인/회원가입 페이지 구현</li>
                <li>라우터 가드로 인증 체크</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3>카테고리 구조 설계</h3>
              <ul>
                <li>대분류(과목, UI, 기능개발, 기타) 구성</li>
                <li>중분류(React, Vue, JavaScript 등) 페이지 생성</li>
                <li>소분류(Hooks, State 등) 탭 네비게이션 구현</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h3>글쓰기 기능 구현</h3>
              <ul>
                <li>양쪽 패널 레이아웃 (원본 문서 / 노트)</li>
                <li>라인 단위 발췌 기능</li>
                <li>Firestore 저장 로직</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h3>주요 기능 추가</h3>
              <ul>
                <li>Syntax Highlighting 적용</li>
                <li>임베드 URL 지원</li>
                <li>다크모드 구현</li>
                <li>반응형 디자인</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">6</div>
            <div class="timeline-content">
              <h3>배포 및 최적화</h3>
              <ul>
                <li>Firebase Hosting으로 배포</li>
                <li>빌드 최적화</li>
                <li>성능 개선</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 향후 계획 -->
      <section id="future" class="content-section">
        <h2>🔮 향후 계획</h2>

        <div class="future-grid">
          <div class="future-card">
            <div class="future-icon">🔍</div>
            <h3>검색 기능</h3>
            <p>작성한 글을 키워드로 검색하고 필터링할 수 있는 기능</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🏷️</div>
            <h3>태그 시스템</h3>
            <p>글에 태그를 추가하여 더 세밀한 분류 및 검색 지원</p>
          </div>

          <div class="future-card">
            <div class="future-icon">📊</div>
            <h3>통계 대시보드</h3>
            <p>학습 진행률과 작성한 글의 통계를 시각화</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🤝</div>
            <h3>공유 기능</h3>
            <p>작성한 코드를 다른 사용자와 공유할 수 있는 기능</p>
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
  { id: 'structure', title: '프로젝트 구조' },
  { id: 'code', title: '핵심 코드' },
  { id: 'process', title: '개발 과정' },
  { id: 'future', title: '향후 계획' }
]

const showNav = ref(true)
const activeSection = ref('overview')
let lastScrollY = 0
let ticking = false

// 스크롤 이벤트 처리
const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 스크롤 방향에 따라 네비게이션 표시/숨김
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    showNav.value = false // 아래로 스크롤
  } else {
    showNav.value = true // 위로 스크롤
  }

  lastScrollY = currentScrollY

  // 현재 보이는 섹션 확인
  updateActiveSection()
}

// 스크롤 이벤트 최적화 (requestAnimationFrame 사용)
const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

// 현재 활성 섹션 업데이트
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

// 섹션으로 스크롤 이동
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 100 // 네비게이션 높이 고려
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
.code-archive-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  padding-top: 80px; // 네비게이션 공간 확보
}

// 고정 네비게이션
.sticky-nav {
  position: fixed;
  top: 60px; // 헤더 아래
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

  // 스크롤바 숨기기
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
  scroll-margin-top: 150px; // 고정 네비게이션 고려
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

.explanation-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: var(--color-text-secondary);
    line-height: 1.6;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--color-accent);
      font-weight: bold;
    }

    code {
      background: var(--color-bg-tertiary);
      padding: 0.125rem 0.375rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      color: var(--color-accent);
    }
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
  .code-archive-page {
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
