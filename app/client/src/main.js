import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
/* Styles */
import 'vuetify/dist/vuetify.min.css';
import './fullpage/jquery.fullpage.min.css';
import './fullpage/jquery.fullpage.min.js';

Vue.config.productionTip = false;

Vue.use(VueResource);
// Vue.http.options.root = 'http://localhost:3000/api';
Vue.http.options.root = 'https://project314.herokuapp.com/api';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.use(Vuetify, {
  theme: {
    primary: '#1f5860',
    secondary: '#1c717c',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
