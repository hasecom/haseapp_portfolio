import Vue from 'vue'
import App from './App.vue'
import routes from './router/index.js';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({ 
  mode:'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
