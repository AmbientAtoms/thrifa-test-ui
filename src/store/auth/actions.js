import { http } from '@/plugins/api'
import * as TYPES from '@/store/types'
import auth from '@/plugins/auth'
import router from '@/router'

export default {
  async login ({ commit }, user) {
    try {
      const response = await http.post('/users/login/', user)
      commit(TYPES.SET_AUTH, response.data.user)
    } catch ({ response }) {
      commit(TYPES.SET_ERROR, response)
    }
  },

  logout ({ commit }) {
    commit(TYPES.PURGE_AUTH)
  },

  async register ({ commit }, user) {
    try {
      const response = await http.post('/users/', user)
      commit(TYPES.SET_AUTH, response.data.user)
    } catch ({ response }) {
      commit(TYPES.SET_ERROR, response)
    }
  },

  async checkAuth ({ commit }, user) {
    if (auth.getToken()) {
      try {
        const response = await http.post('/users/', user)
        commit(TYPES.SET_AUTH, response.data.user)
      } catch ({ response }) {
        commit(TYPES.SET_ERROR, response)
        router.push({ name: 'Login' })
      }
    } else {
      router.push({ name: 'Login' })
    }
  }
}
