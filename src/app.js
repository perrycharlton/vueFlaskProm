// require('dotenv').config()
import Vue from 'vue';
import VueRouter from 'vue-router';
// import 'bootstrap'
import App from './App.vue'
import {routes} from './main/router/index'
import StoreData from './main/store/Store'
import Admin from './admin/store/Store'
import Prom from './promonitor/store/Store'
import Main from './main/store/Store'
import Vuex from 'vuex';
// import axios from 'axios'
// import 'jquery';
// require('bootstrap');

Vue.use(VueRouter)
Vue.use(Vuex)


const store  = new Vuex.Store({
  modules: {
    admin: Admin,
    promonitor: Prom,
    main: Main
  }
  
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  data: {

  },
  template: '<App/>',
  components: {
    App
  }
})
