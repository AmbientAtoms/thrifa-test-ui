import { http } from '@/plugins/api'
import * as TYPES from '@/store/types'

export default {
  async getQuestions ({ commit }) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await http.get('/questions/')
      commit(TYPES.SET_QUESTIONS, response.data)
    } catch ({ response }) {
      console.log(response)
    }
    commit(TYPES.SET_LOADING, false)
  },

  async createQuestion ({ commit }, form) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await http.post('/questions/', form)
      commit(TYPES.ADD_QUESTION, response.data)
      this.$notify({
        title: 'Success',
        type: 'success',
        text: 'Question was been created'
      })
    } catch ({ response }) {
      console.log(response)
    }
    commit(TYPES.SET_LOADING, false)
  },

  async validateQuestion ({ commit }, form) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await http.post(`/questions/${form.id}/validation`, form)
      commit(TYPES.VALIDATE_QUESTION, { id: form.id, data: response.data })
      if (response.date === true) {
        this.$notify({
          title: 'Success',
          type: 'success',
          text: 'The answer is correct'
        })
      }
    } catch ({ response }) {
      console.log(response)
    }
    commit(TYPES.SET_LOADING, false)
  }
}
