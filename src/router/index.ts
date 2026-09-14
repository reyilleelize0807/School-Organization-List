import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/members',
    name: 'Members',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('baco-member-list-auth') === 'true';
  if ((to.path === '/home' || to.path === '/members') && !isAuthenticated) return '/login';
  if (to.path === '/login' && isAuthenticated) return '/home';
  return true;
})

export default router
