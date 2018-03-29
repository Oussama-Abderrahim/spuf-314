import Vue from 'vue'
import Router from 'vue-router'
import AdminPage from '../pages/AdminPage'
import AddNewLine from '../pages/AddNewLine'
import EditLine from '../pages/EditLine'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AdminPage
  },
  {
    path: '/addnewline',
    name: 'addnewline',
    component: AddNewLine
  },
  {
    path: '/editLine',
    name: 'editline',
    component: EditLine
  },
  {
    path: '*',
    name: 'default',
    component: AdminPage
  }
]

export default new Router({
  routes,
  mode: 'history'
})
