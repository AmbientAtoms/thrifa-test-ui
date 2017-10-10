import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login/Index'
import List from '@/components/Questions/List'
import Edit from '@/components/Questions/Edit'

import authCheck from './authCheck'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(authCheck)

export default router
