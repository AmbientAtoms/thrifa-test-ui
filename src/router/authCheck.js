import store from '@/store'

const authCheck = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.isAuthenticated) {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
}

export default authCheck
