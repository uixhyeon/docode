import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SubjectsPage from '../views/SubjectsPage.vue'
import UIFeaturesPage from '../views/UIFeaturesPage.vue'
import DevelopmentPage from '../views/DevelopmentPage.vue'
import OthersPage from '../views/OthersPage.vue'

// 중분류 페이지들
import SubjectsReactPage from '../views/subjects/ReactPage.vue'
import SubjectsVuePage from '../views/subjects/VuePage.vue'
import SubjectsJavaScriptPage from '../views/subjects/JavaScriptPage.vue'
import SubjectsTypeScriptPage from '../views/subjects/TypeScriptPage.vue'

import UIInteractionPage from '../views/ui-features/InteractionPage.vue'
import UILayoutPage from '../views/ui-features/LayoutPage.vue'
import UIAnimationPage from '../views/ui-features/AnimationPage.vue'
import UIComponentPage from '../views/ui-features/ComponentPage.vue'

import DevAPIPage from '../views/development/APIPage.vue'
import DevStatePage from '../views/development/StatePage.vue'
import DevOptimizationPage from '../views/development/OptimizationPage.vue'
import DevTestingPage from '../views/development/TestingPage.vue'

import OthersToolsPage from '../views/others/ToolsPage.vue'
import OthersReferencesPage from '../views/others/ReferencesPage.vue'
import OthersTipsPage from '../views/others/TipsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // 과목/프레임워크
  {
    path: '/subjects',
    redirect: '/subjects/react'
  },
  {
    path: '/subjects/react',
    name: 'SubjectsReact',
    component: SubjectsReactPage
  },
  {
    path: '/subjects/vue',
    name: 'SubjectsVue',
    component: SubjectsVuePage
  },
  {
    path: '/subjects/javascript',
    name: 'SubjectsJavaScript',
    component: SubjectsJavaScriptPage
  },
  {
    path: '/subjects/typescript',
    name: 'SubjectsTypeScript',
    component: SubjectsTypeScriptPage
  },
  // UI/기능 구현
  {
    path: '/ui-features',
    redirect: '/ui-features/interaction'
  },
  {
    path: '/ui-features/interaction',
    name: 'UIInteraction',
    component: UIInteractionPage
  },
  {
    path: '/ui-features/layout',
    name: 'UILayout',
    component: UILayoutPage
  },
  {
    path: '/ui-features/animation',
    name: 'UIAnimation',
    component: UIAnimationPage
  },
  {
    path: '/ui-features/component',
    name: 'UIComponent',
    component: UIComponentPage
  },
  // 기능 개발
  {
    path: '/development',
    redirect: '/development/api'
  },
  {
    path: '/development/api',
    name: 'DevelopmentAPI',
    component: DevAPIPage
  },
  {
    path: '/development/state',
    name: 'DevelopmentState',
    component: DevStatePage
  },
  {
    path: '/development/optimization',
    name: 'DevelopmentOptimization',
    component: DevOptimizationPage
  },
  {
    path: '/development/testing',
    name: 'DevelopmentTesting',
    component: DevTestingPage
  },
  // 기타
  {
    path: '/others',
    redirect: '/others/tools'
  },
  {
    path: '/others/tools',
    name: 'OthersTools',
    component: OthersToolsPage
  },
  {
    path: '/others/references',
    name: 'OthersReferences',
    component: OthersReferencesPage
  },
  {
    path: '/others/tips',
    name: 'OthersTips',
    component: OthersTipsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
