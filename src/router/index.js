import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'

// 과목/프레임워크 - React
import ReactHooksPage from '../views/subjects/react/HooksPage.vue'
import ReactStatePage from '../views/subjects/react/StatePage.vue'
import ReactStylingPage from '../views/subjects/react/StylingPage.vue'
import ReactOptimizationPage from '../views/subjects/react/OptimizationPage.vue'

// 과목/프레임워크 - Vue
import VueCompositionPage from '../views/subjects/vue/CompositionPage.vue'
import VuePluginsPage from '../views/subjects/vue/PluginsPage.vue'
import VueComponentsPage from '../views/subjects/vue/ComponentsPage.vue'
import VueOptimizationPage from '../views/subjects/vue/OptimizationPage.vue'

// 과목/프레임워크 - JavaScript
import JavaScriptES6Page from '../views/subjects/javascript/ES6Page.vue'
import JavaScriptAsyncPage from '../views/subjects/javascript/AsyncPage.vue'
import JavaScriptPatternsPage from '../views/subjects/javascript/PatternsPage.vue'
import JavaScriptUtilsPage from '../views/subjects/javascript/UtilsPage.vue'

// 과목/프레임워크 - TypeScript
import TypeScriptTypesPage from '../views/subjects/typescript/TypesPage.vue'
import TypeScriptGenericsPage from '../views/subjects/typescript/GenericsPage.vue'
import TypeScriptUtilityPage from '../views/subjects/typescript/UtilityPage.vue'
import TypeScriptConfigPage from '../views/subjects/typescript/ConfigPage.vue'

// UI/기능 구현 - 인터랙션
import InteractionDragDropPage from '../views/ui-features/interaction/DragDropPage.vue'
import InteractionGesturePage from '../views/ui-features/interaction/GesturePage.vue'
import InteractionComponentsPage from '../views/ui-features/interaction/ComponentsPage.vue'
import InteractionKeyboardPage from '../views/ui-features/interaction/KeyboardPage.vue'

// UI/기능 구현 - 레이아웃
import LayoutGridPage from '../views/ui-features/layout/GridPage.vue'
import LayoutDashboardPage from '../views/ui-features/layout/DashboardPage.vue'
import LayoutCardPage from '../views/ui-features/layout/CardPage.vue'
import LayoutModalPage from '../views/ui-features/layout/ModalPage.vue'

// UI/기능 구현 - 애니메이션
import AnimationTransitionPage from '../views/ui-features/animation/TransitionPage.vue'
import AnimationKeyframePage from '../views/ui-features/animation/KeyframePage.vue'
import AnimationScrollPage from '../views/ui-features/animation/ScrollPage.vue'
import AnimationLibraryPage from '../views/ui-features/animation/LibraryPage.vue'

// UI/기능 구현 - 컴포넌트
import ComponentButtonPage from '../views/ui-features/component/ButtonPage.vue'
import ComponentFormPage from '../views/ui-features/component/FormPage.vue'
import ComponentCardPage from '../views/ui-features/component/CardPage.vue'
import ComponentNotificationPage from '../views/ui-features/component/NotificationPage.vue'

// 기능 개발 - API 연동
import APIFetchPage from '../views/development/api/FetchPage.vue'
import APIQueryPage from '../views/development/api/QueryPage.vue'
import APIGraphQLPage from '../views/development/api/GraphQLPage.vue'
import APIAuthPage from '../views/development/api/AuthPage.vue'

// 기능 개발 - 상태 관리
import StateReduxPage from '../views/development/state/ReduxPage.vue'
import StateZustandPage from '../views/development/state/ZustandPage.vue'
import StateContextPage from '../views/development/state/ContextPage.vue'
import StateStoragePage from '../views/development/state/StoragePage.vue'

// 기능 개발 - 최적화
import OptimizationRenderPage from '../views/development/optimization/RenderPage.vue'
import OptimizationBundlePage from '../views/development/optimization/BundlePage.vue'
import OptimizationImagePage from '../views/development/optimization/ImagePage.vue'
import OptimizationPerformancePage from '../views/development/optimization/PerformancePage.vue'

// 기능 개발 - 테스팅
import TestingJestPage from '../views/development/testing/JestPage.vue'
import TestingLibraryPage from '../views/development/testing/LibraryPage.vue'
import TestingE2EPage from '../views/development/testing/E2EPage.vue'
import TestingVisualPage from '../views/development/testing/VisualPage.vue'

// 기타 - 도구
import ToolsPackagePage from '../views/others/tools/PackagePage.vue'
import ToolsBuildPage from '../views/others/tools/BuildPage.vue'
import ToolsDevPage from '../views/others/tools/DevPage.vue'
import ToolsDebugPage from '../views/others/tools/DebugPage.vue'

// 기타 - 참고 자료
import ReferencesDocsPage from '../views/others/references/DocsPage.vue'
import ReferencesLearningPage from '../views/others/references/LearningPage.vue'
import ReferencesBlogPage from '../views/others/references/BlogPage.vue'
import ReferencesVideoPage from '../views/others/references/VideoPage.vue'

// 기타 - 팁
import TipsVSCodePage from '../views/others/tips/VSCodePage.vue'
import TipsProductivityPage from '../views/others/tips/ProductivityPage.vue'
import TipsDebuggingPage from '../views/others/tips/DebuggingPage.vue'
import TipsReviewPage from '../views/others/tips/ReviewPage.vue'

// 글쓰기 및 아티클
import WritePage from '../views/WritePage.vue'
import ArticlePage from '../views/ArticlePage.vue'

// 제작 사이트
import ProductionSitesPage from '../views/ProductionSitesPage.vue'
import ProjectDetailPage from '../views/production-sites/ProjectDetailPage.vue'
import CodeArchivePage from '../views/production-sites/CodeArchivePage.vue'
import TenbytenPage from '../views/production-sites/TenbytenPage.vue'
import CloneCodingPage from '../views/production-sites/CloneCodingPage.vue'
import GukjungparkPage from '../views/production-sites/GukjungparkPage.vue'
import MatajuPage from '../views/production-sites/MatajuPage.vue'

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresGuest: true }
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },

  // 과목/프레임워크 - React
  {
    path: '/subjects/react',
    redirect: '/subjects/react/hooks'
  },
  {
    path: '/subjects/react/hooks',
    name: 'ReactHooks',
    component: ReactHooksPage
  },
  {
    path: '/subjects/react/state',
    name: 'ReactState',
    component: ReactStatePage
  },
  {
    path: '/subjects/react/styling',
    name: 'ReactStyling',
    component: ReactStylingPage
  },
  {
    path: '/subjects/react/optimization',
    name: 'ReactOptimization',
    component: ReactOptimizationPage
  },

  // 과목/프레임워크 - Vue
  {
    path: '/subjects/vue',
    redirect: '/subjects/vue/composition'
  },
  {
    path: '/subjects/vue/composition',
    name: 'VueComposition',
    component: VueCompositionPage
  },
  {
    path: '/subjects/vue/plugins',
    name: 'VuePlugins',
    component: VuePluginsPage
  },
  {
    path: '/subjects/vue/components',
    name: 'VueComponents',
    component: VueComponentsPage
  },
  {
    path: '/subjects/vue/optimization',
    name: 'VueOptimization',
    component: VueOptimizationPage
  },

  // 과목/프레임워크 - JavaScript
  {
    path: '/subjects/javascript',
    redirect: '/subjects/javascript/es6'
  },
  {
    path: '/subjects/javascript/es6',
    name: 'JavaScriptES6',
    component: JavaScriptES6Page
  },
  {
    path: '/subjects/javascript/async',
    name: 'JavaScriptAsync',
    component: JavaScriptAsyncPage
  },
  {
    path: '/subjects/javascript/patterns',
    name: 'JavaScriptPatterns',
    component: JavaScriptPatternsPage
  },
  {
    path: '/subjects/javascript/utils',
    name: 'JavaScriptUtils',
    component: JavaScriptUtilsPage
  },

  // 과목/프레임워크 - TypeScript
  {
    path: '/subjects/typescript',
    redirect: '/subjects/typescript/types'
  },
  {
    path: '/subjects/typescript/types',
    name: 'TypeScriptTypes',
    component: TypeScriptTypesPage
  },
  {
    path: '/subjects/typescript/generics',
    name: 'TypeScriptGenerics',
    component: TypeScriptGenericsPage
  },
  {
    path: '/subjects/typescript/utility',
    name: 'TypeScriptUtility',
    component: TypeScriptUtilityPage
  },
  {
    path: '/subjects/typescript/config',
    name: 'TypeScriptConfig',
    component: TypeScriptConfigPage
  },

  // UI/기능 구현 - 인터랙션
  {
    path: '/ui-features/interaction',
    redirect: '/ui-features/interaction/drag-drop'
  },
  {
    path: '/ui-features/interaction/drag-drop',
    name: 'InteractionDragDrop',
    component: InteractionDragDropPage
  },
  {
    path: '/ui-features/interaction/gesture',
    name: 'InteractionGesture',
    component: InteractionGesturePage
  },
  {
    path: '/ui-features/interaction/components',
    name: 'InteractionComponents',
    component: InteractionComponentsPage
  },
  {
    path: '/ui-features/interaction/keyboard',
    name: 'InteractionKeyboard',
    component: InteractionKeyboardPage
  },

  // UI/기능 구현 - 레이아웃
  {
    path: '/ui-features/layout',
    redirect: '/ui-features/layout/grid'
  },
  {
    path: '/ui-features/layout/grid',
    name: 'LayoutGrid',
    component: LayoutGridPage
  },
  {
    path: '/ui-features/layout/dashboard',
    name: 'LayoutDashboard',
    component: LayoutDashboardPage
  },
  {
    path: '/ui-features/layout/card',
    name: 'LayoutCard',
    component: LayoutCardPage
  },
  {
    path: '/ui-features/layout/modal',
    name: 'LayoutModal',
    component: LayoutModalPage
  },

  // UI/기능 구현 - 애니메이션
  {
    path: '/ui-features/animation',
    redirect: '/ui-features/animation/transition'
  },
  {
    path: '/ui-features/animation/transition',
    name: 'AnimationTransition',
    component: AnimationTransitionPage
  },
  {
    path: '/ui-features/animation/keyframe',
    name: 'AnimationKeyframe',
    component: AnimationKeyframePage
  },
  {
    path: '/ui-features/animation/scroll',
    name: 'AnimationScroll',
    component: AnimationScrollPage
  },
  {
    path: '/ui-features/animation/library',
    name: 'AnimationLibrary',
    component: AnimationLibraryPage
  },

  // UI/기능 구현 - 컴포넌트
  {
    path: '/ui-features/component',
    redirect: '/ui-features/component/button'
  },
  {
    path: '/ui-features/component/button',
    name: 'ComponentButton',
    component: ComponentButtonPage
  },
  {
    path: '/ui-features/component/form',
    name: 'ComponentForm',
    component: ComponentFormPage
  },
  {
    path: '/ui-features/component/card',
    name: 'ComponentCard',
    component: ComponentCardPage
  },
  {
    path: '/ui-features/component/notification',
    name: 'ComponentNotification',
    component: ComponentNotificationPage
  },

  // 기능 개발 - API 연동
  {
    path: '/development/api',
    redirect: '/development/api/fetch'
  },
  {
    path: '/development/api/fetch',
    name: 'APIFetch',
    component: APIFetchPage
  },
  {
    path: '/development/api/query',
    name: 'APIQuery',
    component: APIQueryPage
  },
  {
    path: '/development/api/graphql',
    name: 'APIGraphQL',
    component: APIGraphQLPage
  },
  {
    path: '/development/api/auth',
    name: 'APIAuth',
    component: APIAuthPage
  },

  // 기능 개발 - 상태 관리
  {
    path: '/development/state',
    redirect: '/development/state/redux'
  },
  {
    path: '/development/state/redux',
    name: 'StateRedux',
    component: StateReduxPage
  },
  {
    path: '/development/state/zustand',
    name: 'StateZustand',
    component: StateZustandPage
  },
  {
    path: '/development/state/context',
    name: 'StateContext',
    component: StateContextPage
  },
  {
    path: '/development/state/storage',
    name: 'StateStorage',
    component: StateStoragePage
  },

  // 기능 개발 - 최적화
  {
    path: '/development/optimization',
    redirect: '/development/optimization/render'
  },
  {
    path: '/development/optimization/render',
    name: 'OptimizationRender',
    component: OptimizationRenderPage
  },
  {
    path: '/development/optimization/bundle',
    name: 'OptimizationBundle',
    component: OptimizationBundlePage
  },
  {
    path: '/development/optimization/image',
    name: 'OptimizationImage',
    component: OptimizationImagePage
  },
  {
    path: '/development/optimization/performance',
    name: 'OptimizationPerformance',
    component: OptimizationPerformancePage
  },

  // 기능 개발 - 테스팅
  {
    path: '/development/testing',
    redirect: '/development/testing/jest'
  },
  {
    path: '/development/testing/jest',
    name: 'TestingJest',
    component: TestingJestPage
  },
  {
    path: '/development/testing/library',
    name: 'TestingLibrary',
    component: TestingLibraryPage
  },
  {
    path: '/development/testing/e2e',
    name: 'TestingE2E',
    component: TestingE2EPage
  },
  {
    path: '/development/testing/visual',
    name: 'TestingVisual',
    component: TestingVisualPage
  },

  // 기타 - 도구
  {
    path: '/others/tools',
    redirect: '/others/tools/package'
  },
  {
    path: '/others/tools/package',
    name: 'ToolsPackage',
    component: ToolsPackagePage
  },
  {
    path: '/others/tools/build',
    name: 'ToolsBuild',
    component: ToolsBuildPage
  },
  {
    path: '/others/tools/dev',
    name: 'ToolsDev',
    component: ToolsDevPage
  },
  {
    path: '/others/tools/debug',
    name: 'ToolsDebug',
    component: ToolsDebugPage
  },

  // 기타 - 참고 자료
  {
    path: '/others/references',
    redirect: '/others/references/docs'
  },
  {
    path: '/others/references/docs',
    name: 'ReferencesDocs',
    component: ReferencesDocsPage
  },
  {
    path: '/others/references/learning',
    name: 'ReferencesLearning',
    component: ReferencesLearningPage
  },
  {
    path: '/others/references/blog',
    name: 'ReferencesBlog',
    component: ReferencesBlogPage
  },
  {
    path: '/others/references/video',
    name: 'ReferencesVideo',
    component: ReferencesVideoPage
  },

  // 기타 - 팁
  {
    path: '/others/tips',
    redirect: '/others/tips/vscode'
  },
  {
    path: '/others/tips/vscode',
    name: 'TipsVSCode',
    component: TipsVSCodePage
  },
  {
    path: '/others/tips/productivity',
    name: 'TipsProductivity',
    component: TipsProductivityPage
  },
  {
    path: '/others/tips/debugging',
    name: 'TipsDebugging',
    component: TipsDebuggingPage
  },
  {
    path: '/others/tips/review',
    name: 'TipsReview',
    component: TipsReviewPage
  },

  // 글쓰기 및 아티클
  {
    path: '/write',
    name: 'Write',
    component: WritePage
  },
  {
    path: '/article',
    name: 'Article',
    component: ArticlePage
  },

  // 제작 사이트
  {
    path: '/production-sites',
    name: 'ProductionSites',
    component: ProductionSitesPage
  },
  {
    path: '/production-sites/code-archive',
    name: 'CodeArchive',
    component: CodeArchivePage
  },
  {
    path: '/production-sites/tenbyten',
    name: 'Tenbyten',
    component: TenbytenPage
  },
  {
    path: '/production-sites/clonecoding',
    name: 'CloneCoding',
    component: CloneCodingPage
  },
  {
    path: '/production-sites/gukjungpark',
    name: 'Gukjungpark',
    component: GukjungparkPage
  },
  {
    path: '/production-sites/mataju',
    name: 'Mataju',
    component: MatajuPage
  },
  {
    path: '/production-sites/:id',
    name: 'ProjectDetail',
    component: ProjectDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Firebase Auth 상태 초기화 대기
let authReady = false
auth.onAuthStateChanged(() => {
  authReady = true
})

// 인증 가드
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

  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  const user = auth.currentUser

  console.log('[Router Guard] Path:', to.path, 'User:', user ? user.email : 'not logged in')

  // 로그인, 회원가입 페이지가 아니면 모두 인증 필요
  if (to.path !== '/login' && to.path !== '/signup' && !user) {
    console.log('[Router Guard] Redirecting to /login - no user')
    next('/login')
  } else if (requiresGuest && user) {
    // 로그인 페이지인데 이미 로그인한 경우
    console.log('[Router Guard] Redirecting to / - already logged in')
    next('/')
  } else {
    console.log('[Router Guard] Allowing navigation')
    next()
  }
})

export default router
