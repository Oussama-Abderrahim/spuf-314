import Vue from 'vue'
import Router from 'vue-router'
import AdminPage from '../pages/AdminPage'
import AddNewLine from '../pages/AddNewLine'
import EditLine from '../pages/EditLine'
import CreateStationDialog from '../components/CreateStationDialog'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AdminPage
  },
  {
    path: '/addnewline',
    name: 'Ajouter une nouvelle ligne',
    component: AddNewLine
  },
  {
    path: '/editLine',
    name: 'editline',
    component: EditLine
  },
  {
    path: '/createStation',
    name: 'createstation',
    component: CreateStationDialog
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
