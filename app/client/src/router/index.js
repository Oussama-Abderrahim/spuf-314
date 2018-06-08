import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import ResponsePage from '@/views/ResponsePage'
import ErrorPage from '@/views/ErrorPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/response',
    name: 'response',
    component: ResponsePage
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
