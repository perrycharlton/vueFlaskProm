import Vue from 'vue';
import VueRouter from 'vue-router';
// import 'bootstrap'
import App from './App.vue'
import {routes} from './router/index'
import StoreData from './store/Store'
import Vuex from 'vuex';
import axios from 'axios'
// import 'jquery';
// require('bootstrap');

Vue.use(VueRouter)
Vue.use(Vuex)


const store  = new Vuex.Store(StoreData)

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
