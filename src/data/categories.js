export const categories = [
  {
    id: 'subjects',
    name: '📚 과목/프레임워크',
    icon: '📚',
    subcategories: [
      {
        id: 'html-css',
        name: 'HTML/CSS',
        icon: '🎨',
        items: [
          { id: 'html-tags', name: 'HTML 태그', path: '/subjects/html-css/html-tags' },
          { id: 'semantic-html', name: 'Semantic HTML', path: '/subjects/html-css/semantic-html' },
          { id: 'css-selectors', name: 'CSS 선택자', path: '/subjects/html-css/css-selectors' },
          { id: 'flexbox', name: 'Flexbox', path: '/subjects/html-css/flexbox' },
          { id: 'grid', name: 'Grid', path: '/subjects/html-css/grid' },
          { id: 'responsive', name: '반응형', path: '/subjects/html-css/responsive' },
          { id: 'css-variables', name: 'CSS 변수', path: '/subjects/html-css/css-variables' }
        ]
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        icon: '⚡',
        items: [
          { id: 'es6-syntax', name: 'ES6+ 문법', path: '/subjects/javascript/es6-syntax' },
          { id: 'async', name: '비동기 처리', path: '/subjects/javascript/async' },
          { id: 'array-methods', name: '배열/객체 메서드', path: '/subjects/javascript/array-methods' },
          { id: 'dom', name: 'DOM 조작', path: '/subjects/javascript/dom' }
        ]
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: '🔷',
        items: [
          { id: 'basic-types', name: '기본 타입', path: '/subjects/typescript/basic-types' },
          { id: 'interfaces', name: '인터페이스', path: '/subjects/typescript/interfaces' },
          { id: 'generics', name: '제네릭', path: '/subjects/typescript/generics' }
        ]
      },
      {
        id: 'react',
        name: 'React',
        icon: '⚛️',
        items: [
          { id: 'hooks', name: 'Hooks', path: '/subjects/react/hooks' },
          { id: 'component-patterns', name: '컴포넌트 패턴', path: '/subjects/react/component-patterns' },
          { id: 'state-management', name: '상태 관리', path: '/subjects/react/state-management' },
          { id: 'lifecycle', name: '라이프사이클', path: '/subjects/react/lifecycle' }
        ]
      },
      {
        id: 'vue',
        name: 'Vue',
        icon: '💚',
        items: [
          { id: 'composition-api', name: 'Composition API', path: '/subjects/vue/composition-api' },
          { id: 'directives', name: 'Directives', path: '/subjects/vue/directives' },
          { id: 'vuex-pinia', name: 'Vuex/Pinia', path: '/subjects/vue/vuex-pinia' }
        ]
      },
      {
        id: 'firebase',
        name: 'Firebase',
        icon: '🔥',
        items: [
          { id: 'authentication', name: 'Authentication', path: '/subjects/firebase/authentication' },
          { id: 'firestore', name: 'Firestore', path: '/subjects/firebase/firestore' },
          { id: 'storage', name: 'Storage', path: '/subjects/firebase/storage' }
        ]
      }
    ]
  },
  {
    id: 'ui-features',
    name: '🎨 UI/기능 구현',
    icon: '🎨',
    subcategories: [
      {
        id: 'interaction',
        name: '인터랙션',
        icon: '🖱️',
        items: [
          { id: 'toggle', name: '토글', path: '/ui-features/interaction/toggle' },
          { id: 'tabs', name: '탭', path: '/ui-features/interaction/tabs' },
          { id: 'modal', name: '모달', path: '/ui-features/interaction/modal' },
          { id: 'dropdown', name: '드롭다운', path: '/ui-features/interaction/dropdown' },
          { id: 'accordion', name: '아코디언', path: '/ui-features/interaction/accordion' },
          { id: 'carousel', name: '캐러셀/슬라이더', path: '/ui-features/interaction/carousel' },
          { id: 'tooltip', name: '툴팁', path: '/ui-features/interaction/tooltip' },
          { id: 'drag-drop', name: '드래그 앤 드롭', path: '/ui-features/interaction/drag-drop' }
        ]
      },
      {
        id: 'layout',
        name: '레이아웃',
        icon: '📐',
        items: [
          { id: 'grid-layout', name: '그리드', path: '/ui-features/layout/grid-layout' },
          { id: 'flex-layout', name: '플렉스', path: '/ui-features/layout/flex-layout' },
          { id: 'responsive-layout', name: '반응형', path: '/ui-features/layout/responsive-layout' }
        ]
      },
      {
        id: 'animation',
        name: '애니메이션',
        icon: '✨',
        items: [
          { id: 'transition', name: 'Transition', path: '/ui-features/animation/transition' },
          { id: 'transform', name: 'Transform', path: '/ui-features/animation/transform' },
          { id: 'scroll-effects', name: '스크롤 효과', path: '/ui-features/animation/scroll-effects' }
        ]
      },
      {
        id: 'charts',
        name: '차트/그래프',
        icon: '📊',
        items: [
          { id: 'line-chart', name: '선 그래프', path: '/ui-features/charts/line-chart' },
          { id: 'bar-chart', name: '막대 그래프', path: '/ui-features/charts/bar-chart' },
          { id: 'pie-chart', name: '원 그래프', path: '/ui-features/charts/pie-chart' }
        ]
      }
    ]
  },
  {
    id: 'development',
    name: '🔧 기능 개발',
    icon: '🔧',
    subcategories: [
      {
        id: 'form',
        name: '폼 처리',
        icon: '📝',
        items: [
          { id: 'validation', name: '유효성 검사', path: '/development/form/validation' },
          { id: 'file-upload', name: '파일 업로드', path: '/development/form/file-upload' },
          { id: 'multi-step', name: '다단계 폼', path: '/development/form/multi-step' }
        ]
      },
      {
        id: 'data',
        name: '데이터 관리',
        icon: '💾',
        items: [
          { id: 'crud', name: 'CRUD', path: '/development/data/crud' },
          { id: 'search-filter', name: '검색/필터', path: '/development/data/search-filter' },
          { id: 'sorting', name: '정렬', path: '/development/data/sorting' },
          { id: 'pagination', name: '페이지네이션', path: '/development/data/pagination' }
        ]
      },
      {
        id: 'routing',
        name: '라우팅',
        icon: '🛣️',
        items: [
          { id: 'dynamic-routing', name: '동적 라우팅', path: '/development/routing/dynamic-routing' },
          { id: 'nested-routes', name: '중첩 라우트', path: '/development/routing/nested-routes' },
          { id: 'route-guards', name: '라우트 가드', path: '/development/routing/route-guards' }
        ]
      },
      {
        id: 'state',
        name: '상태 관리',
        icon: '🔄',
        items: [
          { id: 'context-api', name: 'Context API', path: '/development/state/context-api' },
          { id: 'redux', name: 'Redux', path: '/development/state/redux' },
          { id: 'zustand', name: 'Zustand', path: '/development/state/zustand' }
        ]
      },
      {
        id: 'api',
        name: 'API & 네트워크',
        icon: '🌐',
        items: [
          { id: 'rest-api', name: 'REST API', path: '/development/api/rest-api' },
          { id: 'axios-fetch', name: 'Axios/Fetch', path: '/development/api/axios-fetch' },
          { id: 'error-handling', name: '에러 핸들링', path: '/development/api/error-handling' },
          { id: 'loading', name: '로딩 처리', path: '/development/api/loading' }
        ]
      },
      {
        id: 'auth',
        name: '인증 & 보안',
        icon: '🔐',
        items: [
          { id: 'login-signup', name: '로그인/회원가입', path: '/development/auth/login-signup' },
          { id: 'jwt', name: 'JWT', path: '/development/auth/jwt' },
          { id: 'permissions', name: '권한 관리', path: '/development/auth/permissions' }
        ]
      },
      {
        id: 'optimization',
        name: '최적화 & 성능',
        icon: '⚡',
        items: [
          { id: 'lazy-loading', name: 'Lazy Loading', path: '/development/optimization/lazy-loading' },
          { id: 'code-splitting', name: 'Code Splitting', path: '/development/optimization/code-splitting' },
          { id: 'memoization', name: 'Memoization', path: '/development/optimization/memoization' },
          { id: 'image-optimization', name: '이미지 최적화', path: '/development/optimization/image-optimization' }
        ]
      }
    ]
  },
  {
    id: 'others',
    name: '🗂️ 기타',
    icon: '🗂️',
    subcategories: [
      {
        id: 'git',
        name: 'Git/GitHub',
        icon: '🔀',
        items: [
          { id: 'basic-commands', name: '기본 명령어', path: '/others/git/basic-commands' },
          { id: 'branch-management', name: '브랜치 관리', path: '/others/git/branch-management' },
          { id: 'collaboration', name: '협업 플로우', path: '/others/git/collaboration' }
        ]
      },
      {
        id: 'deploy',
        name: '배포',
        icon: '🚀',
        items: [
          { id: 'vercel', name: 'Vercel', path: '/others/deploy/vercel' },
          { id: 'netlify', name: 'Netlify', path: '/others/deploy/netlify' },
          { id: 'github-pages', name: 'GitHub Pages', path: '/others/deploy/github-pages' }
        ]
      },
      {
        id: 'tools',
        name: '개발 도구',
        icon: '🛠️',
        items: [
          { id: 'vscode-tips', name: 'VSCode 팁', path: '/others/tools/vscode-tips' },
          { id: 'devtools', name: 'DevTools', path: '/others/tools/devtools' },
          { id: 'extensions', name: '확장 프로그램', path: '/others/tools/extensions' }
        ]
      },
      {
        id: 'package',
        name: '패키지 매니저',
        icon: '📦',
        items: [
          { id: 'npm', name: 'npm', path: '/others/package/npm' },
          { id: 'yarn', name: 'yarn', path: '/others/package/yarn' }
        ]
      },
      {
        id: 'build',
        name: '빌드 도구',
        icon: '⚙️',
        items: [
          { id: 'vite', name: 'Vite', path: '/others/build/vite' },
          { id: 'webpack', name: 'Webpack', path: '/others/build/webpack' }
        ]
      },
      {
        id: 'troubleshooting',
        name: '트러블슈팅',
        icon: '🐛',
        items: [
          { id: 'common-errors', name: '자주 만난 에러', path: '/others/troubleshooting/common-errors' },
          { id: 'debugging-tips', name: '디버깅 팁', path: '/others/troubleshooting/debugging-tips' },
          { id: 'solutions', name: '해결 패턴', path: '/others/troubleshooting/solutions' }
        ]
      }
    ]
  }
]
