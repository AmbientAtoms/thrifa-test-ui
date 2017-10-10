import * as TYPES from '../types'

export default {
  [TYPES.SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [TYPES.ADD_QUESTION] (state, data) {
    state.list.unshift(data)
  },
  [TYPES.SET_QUESTIONS] (state, data) {
    state.list = data
  },
  [TYPES.VALIDATE_QUESTION] (state, { id, data }) {
    state.validation[id] = data
  }
}
