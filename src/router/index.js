import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

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
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
