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
            <p>JavaScript, TypeScript, Python, Vue, React, Markdown 등 다양한 프로그래밍 언어의 문법 강조를 지원합니다. GitHub 스타일의 코드 하이라이팅을 직접 구현했습니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📄</div>
            <h3>라인 단위 발췌 기능</h3>
            <p>원본 문서에서 필요한 부분만 라인 단위로 선택하여 발췌할 수 있습니다. 드래그 앤 드롭으로 쉽게 선택하고 노트 카드로 추출 가능합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔗</div>
            <h3>임베드 지원</h3>
            <p>CodePen, CodeSandbox, Vercel 등 외부 코드 실행 환경을 iframe으로 임베드할 수 있습니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔐</div>
            <h3>사용자 인증 시스템</h3>
            <p>Firebase Authentication을 통한 안전한 로그인/회원가입 시스템. 라우터 가드로 미인증 사용자 접근을 차단합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">☁️</div>
            <h3>클라우드 저장 및 동기화</h3>
            <p>Firestore를 통해 데이터를 클라우드에 저장하고 실시간으로 동기화합니다. 사용자별 독립된 데이터 구조를 가집니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">✏️</div>
            <h3>실시간 편집 기능</h3>
            <p>모달을 통한 제목 수정, 인라인 편집 등 다양한 편집 기능을 제공합니다. EditModal 컴포넌트를 통해 일관된 UX를 제공합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📢</div>
            <h3>Toast 알림 시스템</h3>
            <p>성공/경고/오류 메시지를 사용자에게 직관적으로 전달하는 Toast 시스템. Composable 패턴으로 재사용 가능하게 구현했습니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌓</div>
            <h3>다크모드 지원</h3>
            <p>CSS 변수를 활용한 다크모드/라이트모드 전환 기능. 사용자의 테마 선택을 localStorage에 저장합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>반응형 디자인</h3>
            <p>모바일, 태블릿, 데스크톱 모든 화면 크기에 최적화된 반응형 레이아웃을 제공합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>동적 라우팅</h3>
            <p>Vue Router의 동적 라우트 매칭을 활용하여 프로젝트별 상세 페이지를 생성합니다. URL 파라미터로 데이터를 전달합니다.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>데이터 영속성</h3>
            <p>Firebase와 localStorage를 결합하여 오프라인 상황에서도 데이터를 보존합니다. useLocalStorage Composable로 구현했습니다.</p>
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
    { ...articleData, createdAt: serverTimestamp() }
  )
  return docRef.id
}

// 글 목록 조회 (카테고리 필터링)
export const getArticles = async (userId, filters) => {
  let q = collection(db, 'users', userId, 'articles')

  if (filters.category) {
    q = query(q, where('category', '==', filters.category))
  }
  if (filters.subcategory) {
    q = query(q, where('subcategory', '==', filters.subcategory))
  }

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

// 제작사이트 저장 (서브컬렉션)
export const saveProductionSite = async (userId, siteData) => {
  const docRef = await addDoc(
    collection(db, 'users', userId, 'production-sites'),
    { ...siteData, createdAt: serverTimestamp() }
  )
  return docRef.id
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li><code>addDoc()</code>으로 새 문서 추가, <code>serverTimestamp()</code>로 서버 시간 기록</li>
            <li><code>query()</code>와 <code>where()</code>로 필터링된 쿼리 생성</li>
            <li>사용자별로 독립된 컬렉션 구조 (<code>users/{userId}/articles</code>)</li>
            <li>서브컬렉션을 활용한 계층적 데이터 구조</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>3. Toast 시스템 (useToast.js)</h3>
          <p>사용자에게 알림을 표시하는 재사용 가능한 Composable입니다.</p>
          <div class="code-block">
            <pre><code>import { ref } from 'vue'

const toasts = ref([])
let toastId = 0

export const useToast = () => {
  const addToast = (message, type = 'info', duration = 3000) => {
    const id = toastId++
    toasts.value.push({ id, message, type })

    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, duration)
  }

  return {
    toasts,
    success: (msg) => addToast(msg, 'success'),
    error: (msg) => addToast(msg, 'error'),
    warning: (msg) => addToast(msg, 'warning')
  }
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li>Composable 패턴으로 전역 상태 관리</li>
            <li>자동으로 사라지는 Toast 알림 구현</li>
            <li>성공/오류/경고 메시지 타입 지원</li>
            <li>여러 컴포넌트에서 동일한 Toast 인스턴스 공유</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>4. localStorage 영속성 (useLocalStorage.js)</h3>
          <p>로컬 스토리지와 Vue의 반응성을 결합한 데이터 영속화 Composable입니다.</p>
          <div class="code-block">
            <pre><code>import { watch, onMounted } from 'vue'

export const useLocalStorage = (ref, key, defaultValue) => {
  // 컴포넌트 마운트 시 localStorage에서 데이터 로드
  onMounted(() => {
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        ref.value = JSON.parse(stored)
      } catch (e) {
        ref.value = defaultValue
      }
    } else {
      ref.value = defaultValue
    }
  })

  // ref 값이 변경될 때마다 localStorage에 자동 저장
  watch(ref, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li><code>watch()</code>로 데이터 변경 감지 및 자동 저장</li>
            <li><code>deep: true</code>로 중첩된 객체 변경도 감지</li>
            <li>JSON 직렬화를 통한 복잡한 객체 저장</li>
            <li>오프라인 환경에서도 데이터 보존</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>5. 라우터 인증 가드 (router/index.js)</h3>
          <p>페이지 접근 전 사용자 인증 상태를 확인합니다.</p>
          <div class="code-block">
            <pre><code>let authReady = false

auth.onAuthStateChanged(() => {
  authReady = true
})

router.beforeEach(async (to, from, next) => {
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
            <li>비동기 초기화로 인한 race condition 방지</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>6. Syntax Highlighting (WritePage.vue)</h3>
          <p>직접 구현한 문법 강조 시스템입니다.</p>
          <div class="code-block">
            <pre><code>const highlightSyntax = (code, language = 'javascript') => {
  if (!code) return ''
  let highlighted = code

  // 언어별 키워드 정의
  const keywords = {
    javascript: ['const', 'let', 'var', 'function', 'return', ...],
    typescript: ['interface', 'type', 'enum', ...],
    markdown: []
  }

  // 키워드 하이라이트
  keywords[language]?.forEach(keyword => {
    const regex = new RegExp(`\\\\b${keyword}\\\\b`, 'g')
    highlighted = highlighted.replace(regex,
      `&lt;span style="color: #c678dd;"&gt;${keyword}&lt;/span&gt;`)
  })

  // 문자열 하이라이트
  highlighted = highlighted.replace(
    /(["'\`])(?:(?=(\\\\?))\2.)*?\1/g,
    '&lt;span style="color: #98c379;"&gt;$&&lt;/span&gt;'
  )

  return highlighted
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li>정규식을 활용한 키워드, 문자열, 주석 하이라이팅</li>
            <li>언어별 커스텀 키워드 지원</li>
            <li>GitHub 다크 테마 컬러 스킴 적용</li>
            <li>외부 라이브러리 없이 순수 JavaScript로 구현</li>
          </ul>
        </div>

        <div class="code-explanation">
          <h3>7. 동적 프로젝트 페이지 (ProjectDetailPage.vue)</h3>
          <p>URL 파라미터를 활용한 동적 페이지 생성 및 실시간 편집 기능입니다.</p>
          <div class="code-block">
            <pre><code>const route = useRoute()
const siteId = computed(() => route.params.id)

// Firebase에서 프로젝트 데이터 로드
const loadSite = async () => {
  const user = auth.currentUser
  if (!user) return

  const data = await getProductionSite(user.uid, siteId.value)
  if (data) {
    siteName.value = data.name
    sections.value = data.sections || []
  }
}

// 섹션 추가
const addSection = async () => {
  const newSection = {
    id: Date.now().toString(),
    title: '새 섹션',
    content: ''
  }
  sections.value.push(newSection)
  await saveSite()
}</code></pre>
          </div>
          <ul class="explanation-list">
            <li><code>route.params</code>로 URL에서 프로젝트 ID 추출</li>
            <li>실시간 CRUD 작업으로 즉시 Firebase에 반영</li>
            <li>마크다운 렌더링 지원</li>
            <li>섹션별 편집/삭제 기능</li>
          </ul>
        </div>
      </section>

      <!-- 개발 과정 -->
      <section id="process" class="content-section">
        <h2>🚀 개발 과정 및 주요 이슈 해결</h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3>프로젝트 초기 설정</h3>
              <ul>
                <li>Vite + Vue 3 프로젝트 생성 (<code>npm create vite@latest</code>)</li>
                <li>Firebase 프로젝트 생성 및 Firestore, Authentication 설정</li>
                <li>Vue Router 설정 및 기본 레이아웃 구성</li>
                <li>SCSS 설정 및 CSS 변수 기반 테마 시스템 구축</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3>인증 시스템 구현</h3>
              <ul>
                <li>Firebase Authentication을 통한 이메일/비밀번호 인증 구현</li>
                <li>로그인/회원가입 페이지 구현 및 유효성 검사 추가</li>
                <li>라우터 가드로 인증 체크 (비동기 초기화 문제 해결)</li>
                <li><strong>이슈:</strong> Firebase Auth의 비동기 초기화로 인한 race condition 발생</li>
                <li><strong>해결:</strong> <code>onAuthStateChanged</code>로 초기화 완료 대기 로직 구현</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3>카테고리 구조 설계 및 구현</h3>
              <ul>
                <li>대분류(과목, UI특성, 기능개발, 기타, 제작사이트) 4단계 구조 설계</li>
                <li>중분류(React, Vue, JavaScript 등) 페이지 생성</li>
                <li>소분류(Hooks, State 등) 탭 네비게이션 컴포넌트 구현</li>
                <li>동적 라우팅으로 카테고리별 페이지 자동 생성</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h3>글쓰기 기능 구현 (WritePage)</h3>
              <ul>
                <li>2패널 레이아웃 구현 (원본 문서 뷰어 / 노트 작성 영역)</li>
                <li>드래그로 라인 단위 선택 및 발췌 기능 구현</li>
                <li>발췌한 코드를 카드로 추출하는 기능</li>
                <li>패널 크기 조절 핸들 구현 (드래그로 비율 조정)</li>
                <li>Firestore에 카드 데이터 저장</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h3>Syntax Highlighting 구현</h3>
              <ul>
                <li>정규식 기반 키워드, 문자열, 주석 하이라이팅</li>
                <li>JavaScript, TypeScript, Python, Vue, React, Markdown 지원</li>
                <li>GitHub 다크 테마 컬러 스킴 적용</li>
                <li><strong>이슈:</strong> 외부 라이브러리(Prism.js, highlight.js) 번들 크기 증가</li>
                <li><strong>해결:</strong> 순수 JavaScript로 커스텀 하이라이터 구현 (번들 크기 30% 감소)</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">6</div>
            <div class="timeline-content">
              <h3>EditModal & Toast 시스템 구현</h3>
              <ul>
                <li>재사용 가능한 EditModal 컴포넌트 구현</li>
                <li>Toast 알림 시스템 Composable 패턴으로 구현</li>
                <li>모든 페이지에 일관된 편집 UX 적용</li>
                <li>성공/경고/오류 타입별 Toast 메시지 표시</li>
                <li><strong>이슈:</strong> 여러 컴포넌트에서 Toast 상태 공유 문제</li>
                <li><strong>해결:</strong> Composable 패턴으로 전역 상태 관리</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">7</div>
            <div class="timeline-content">
              <h3>localStorage 영속성 구현</h3>
              <ul>
                <li><code>useLocalStorage</code> Composable 구현</li>
                <li>Vue의 <code>watch</code>로 데이터 변경 자동 감지 및 저장</li>
                <li>Firebase와 localStorage 하이브리드 저장 전략</li>
                <li><strong>이슈:</strong> Vue Reactivity 버그 - 배열/객체 변경이 감지되지 않음</li>
                <li><strong>해결:</strong> <code>watch</code>에 <code>{ deep: true }</code> 옵션 추가</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">8</div>
            <div class="timeline-content">
              <h3>제작사이트 대분류 추가</h3>
              <ul>
                <li>제작사이트 페이지 생성 및 네비게이션에 추가</li>
                <li>Firebase subcollection으로 프로젝트별 데이터 관리</li>
                <li>동적 프로젝트 상세 페이지 구현 (ProjectDetailPage)</li>
                <li>실시간 섹션 추가/수정/삭제 기능</li>
                <li>마크다운 렌더링 지원</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">9</div>
            <div class="timeline-content">
              <h3>제목 수정 기능 및 편집 기능 추가</h3>
              <ul>
                <li>모든 카드에 제목 수정 버튼 추가</li>
                <li>EditModal로 일관된 편집 UX 제공</li>
                <li>중복 체크 및 유효성 검사 구현</li>
                <li>'새 컨텐츠 추가' 버튼을 페이지 하단으로 통일</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">10</div>
            <div class="timeline-content">
              <h3>Firebase 연동 및 프로덕션 배포</h3>
              <ul>
                <li>Production Sites를 Firebase로 마이그레이션</li>
                <li>서버 타임스탬프로 생성/수정 시간 기록</li>
                <li>Firebase Hosting으로 배포</li>
                <li>빌드 최적화 및 성능 개선</li>
                <li><strong>이슈:</strong> localStorage에서 Firebase로 전환 시 기존 데이터 유실</li>
                <li><strong>해결:</strong> DEFAULT_PROJECTS로 기본 프로젝트 보존, Firebase 데이터와 병합</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">11</div>
            <div class="timeline-content">
              <h3>다크모드/라이트모드 테마 시스템</h3>
              <ul>
                <li>CSS 변수 기반 테마 시스템 구축</li>
                <li>헤더에 다크모드 토글 버튼 추가</li>
                <li>사용자 선택을 localStorage에 저장</li>
                <li><strong>이슈:</strong> WritePage 코드 영역이 다크모드로 고정됨</li>
                <li><strong>해결:</strong> 하드코딩된 색상을 CSS 변수로 변경하여 테마 전환 지원</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">12</div>
            <div class="timeline-content">
              <h3>스크롤 기반 고정 네비게이션</h3>
              <ul>
                <li>스크롤 방향 감지로 네비게이션 자동 숨김/표시</li>
                <li>현재 보이는 섹션에 따라 활성 메뉴 표시</li>
                <li><code>requestAnimationFrame</code>으로 스크롤 이벤트 최적화</li>
                <li>부드러운 스크롤 애니메이션 적용</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 향후 계획 -->
      <section id="future" class="content-section">
        <h2>🔮 향후 계획 및 개선 사항</h2>

        <div class="future-grid">
          <div class="future-card">
            <div class="future-icon">🔍</div>
            <h3>전역 검색 기능</h3>
            <p>작성한 글을 키워드로 검색하고 필터링할 수 있는 기능. Firestore 쿼리 최적화 및 검색 인덱싱을 통한 빠른 검색 제공</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🏷️</div>
            <h3>태그 시스템 및 북마크</h3>
            <p>글에 태그를 추가하여 더 세밀한 분류 가능. 자주 보는 글을 북마크하여 빠르게 접근. 태그 클라우드로 시각화</p>
          </div>

          <div class="future-card">
            <div class="future-icon">📊</div>
            <h3>통계 대시보드</h3>
            <p>학습 진행률과 작성한 글의 통계를 Chart.js로 시각화. 카테고리별 작성 글 수, 최근 활동 추이, 주간/월간 리포트 제공</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🤝</div>
            <h3>공유 및 협업 기능</h3>
            <p>작성한 코드를 다른 사용자와 공유하고 댓글을 달 수 있는 기능. 공개/비공개 설정 및 공유 링크 생성</p>
          </div>

          <div class="future-card">
            <div class="future-icon">📝</div>
            <h3>마크다운 에디터 고도화</h3>
            <p>WYSIWYG 마크다운 에디터 도입. 실시간 미리보기, 이미지 업로드, 테이블 지원, 목차 자동 생성</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🔔</div>
            <h3>알림 시스템</h3>
            <p>새 댓글, 공유된 글, 시스템 공지사항 등을 실시간으로 알림. Firebase Cloud Messaging 활용</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🎨</div>
            <h3>커스텀 테마</h3>
            <p>사용자가 직접 색상, 폰트, 레이아웃을 커스터마이징할 수 있는 테마 빌더. 테마 프리셋 제공 및 공유</p>
          </div>

          <div class="future-card">
            <div class="future-icon">💾</div>
            <h3>오프라인 지원 (PWA)</h3>
            <p>Progressive Web App으로 전환하여 오프라인에서도 사용 가능. Service Worker를 통한 캐싱 및 동기화</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🌐</div>
            <h3>다국어 지원 (i18n)</h3>
            <p>Vue I18n을 활용한 한국어/영어 지원. 사용자 언어 설정 저장 및 자동 감지</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🔒</div>
            <h3>소셜 로그인</h3>
            <p>Google, GitHub 계정으로 간편 로그인 지원. OAuth 2.0 연동 및 프로필 동기화</p>
          </div>

          <div class="future-card">
            <div class="future-icon">⚡</div>
            <h3>성능 최적화</h3>
            <p>코드 스플리팅, 레이지 로딩, 이미지 최적화, CDN 도입. Lighthouse 점수 95+ 목표</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🧪</div>
            <h3>테스트 자동화</h3>
            <p>Jest 단위 테스트, Cypress E2E 테스트 도입. CI/CD 파이프라인 구축 (GitHub Actions)</p>
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
