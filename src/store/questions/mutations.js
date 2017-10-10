import * as TYPES from '@/store/types'

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
  },
  [TYPES.DELETE_QUESTION] (state, id) {
    let obj = state.list.find(item => item._id === id)
    let index = state.list.indexOf(obj)
    state.list.splice(index, 1)
  },
  [TYPES.SET_ERROR] (state, data) {
    console.log(data)
    state.error = data
  }
}
