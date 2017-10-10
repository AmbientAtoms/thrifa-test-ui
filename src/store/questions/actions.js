import { http } from '@/plugins/api'
import * as TYPES from '@/store/types'
import router from '@/router'

export default {
  async getQuestions ({ commit }) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await http.get('/questions/')
      commit(TYPES.SET_QUESTIONS, response.data)
    } catch ({ response }) {
      commit(TYPES.SET_ERROR, response)
    }
    commit(TYPES.SET_LOADING, false)
  },

  async createQuestion ({ commit }, form) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await http.post('/questions/', form)
      commit(TYPES.ADD_QUESTION, response.data)
      router.push({ name: 'List' })
    } catch ({ response }) {
      commit(TYPES.SET_ERROR, response)
    }
    commit(TYPES.SET_LOADING, false)
    return true
  },

  async deleteQuestion ({ commit }, id) {
    commit(TYPES.SET_LOADING, true)
    try {
      await http.delete(`/questions/${id}`)
      commit(TYPES.DELETE_QUESTION, id)
    } catch ({ response }) {
      commit(TYPES.SET_ERROR, response)
    }
    commit(TYPES.SET_LOADING, false)
  },

  async validateQuestion ({ commit }, form) {
    commit(TYPES.SET_LOADING, true)
    let response
    try {
      response = await http.post(`/questions/${form.id}/validation`, form)
      commit(TYPES.VALIDATE_QUESTION, { id: form.id, data: response.data })
    } catch ({ response }) {
      commit(TYPES.SET_ERROR, response)
    }
    commit(TYPES.SET_LOADING, false)
    return response.data
  }
}
