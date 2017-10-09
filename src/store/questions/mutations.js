import * as TYPES from '../types'

export default {
  [TYPES.SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [TYPES.ADD_QUESTION] (state, data) {
    state.questions.unshift(data)
  },
  [TYPES.SET_QUESTIONS] (state, data) {
    state.questions = data
  }
}
