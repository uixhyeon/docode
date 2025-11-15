import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContentPage from '../views/ContentPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/:category/:subcategory/:item',
      name: 'Content',
      component: ContentPage
    }
  ]
})

export default router
