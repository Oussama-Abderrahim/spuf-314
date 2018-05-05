// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

// import './semantic/dist/semantic.css'
// import './semantic/dist/semantic.js'
// import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
import './fullpage/jquery.fullPage.min.css'
// eslint-disable-next-line
import './fullpage/jquery.fullPage.min.js'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#1F4260',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
