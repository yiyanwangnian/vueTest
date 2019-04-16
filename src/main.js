// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Router from 'vue-router'
import axios from 'axios'
import 'vant/lib/index.css'
// import Header from './components/header'
Vue.prototype.axios = axios

Vue.config.productionTip = false
// Vue.component('head-view', Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
