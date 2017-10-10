import Vue from 'vue'
import Vuex from 'vuex'

import questions from './questions'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    auth
  }
})
