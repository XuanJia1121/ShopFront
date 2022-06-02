import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import store from "./store";
import router from "./router/index"
import http from "./api/http"


new Vue({
  render: h => h(App),
  store,
  router,
  http
}).$mount('#app')
