import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SubjectsPage from '../views/SubjectsPage.vue'
import UIFeaturesPage from '../views/UIFeaturesPage.vue'
import DevelopmentPage from '../views/DevelopmentPage.vue'
import OthersPage from '../views/OthersPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: SubjectsPage
  },
  {
    path: '/ui-features',
    name: 'UIFeatures',
    component: UIFeaturesPage
  },
  {
    path: '/development',
    name: 'Development',
    component: DevelopmentPage
  },
  {
    path: '/others',
    name: 'Others',
    component: OthersPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
