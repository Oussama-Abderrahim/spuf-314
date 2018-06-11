import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Response from '@/views/Response';
// import Error from './views/Error'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/direction',
      name: 'response',
      component: Response
    }
    // {
    //   path: '*',
    //   name: 'default',
    //   component: Error
    // }
  ],
  mode: 'history'
});
