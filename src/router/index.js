import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login/Index'
import List from '@/components/Questions/List'
import Edit from '@/components/Questions/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
