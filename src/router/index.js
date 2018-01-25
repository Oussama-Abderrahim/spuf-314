import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/pages/WelcomePage'
import AboutPage from '@/pages/AboutPage'
import RequestPage from '@/pages/RequestPage'
import ErrorPage from '@/pages/ErrorPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomePage
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/request',
    name: 'request',
    component: RequestPage
  },
  {
    path: '*',
    name: 'default',
    component: ErrorPage
  }
]

export default new Router({
  routes,
  mode: 'history'
})
