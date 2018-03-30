import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/pages/WelcomePage'
import AboutPage from '@/pages/AboutPage'
import RequestPage from '@/pages/RequestPage'
import ResponsePage from '@/pages/ResponsePage'
import InfoPage from '@/pages/Info'
import ErrorPage from '@/pages/ErrorPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/response',
    name: 'response',
    component: ResponsePage
  },
  {
    path: '/info',
    name: 'info',
    component: InfoPage
  },
  {
    path: '*',
    name: 'default',
    component: ErrorPage
  }
]

export default new Router({
  routes,
  mode: 'hash'
})
