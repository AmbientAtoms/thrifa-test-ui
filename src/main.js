// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Notify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import { sync } from 'vuex-router-sync'

import 'vue-material/dist/vue-material.css'
import 'vue-notifyjs/themes/material.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueMaterial)
// TODO
Vue.use(Notify)
Vue.use(VeeValidate)
Vue.config.productionTip = false
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
