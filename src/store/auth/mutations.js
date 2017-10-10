import auth from '@/plugins/auth'
import * as TYPES from '@/store/types'
import { setAuth } from '@/plugins/api/'
import router from '@/router'

export default {
  [TYPES.SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    auth.saveToken(state.user.token)
    setAuth(auth)
    router.push({ name: 'List' })
  },
  [TYPES.PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    auth.destroyToken()
    router.push({ name: 'Login' })
  }
}
