import * as TYPES from '@/store/types'

function timeout () {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

export default {
  async getQuestions ({ commit }, params = {}) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await timeout()
      commit(TYPES.SET_QUESTIONS, response.data)
    } catch ({ response }) {
      console.log(response)
    }
    commit(TYPES.SET_LOADING, false)
  },

  async createQuestion ({ commit }, form) {
    commit(TYPES.SET_LOADING, true)
    try {
      const response = await timeout()
      commit(TYPES.ADD_QUESTION, response.data)
    } catch ({ response }) {
      console.log(response)
    }
    commit(TYPES.SET_LOADING, false)
  }
}
