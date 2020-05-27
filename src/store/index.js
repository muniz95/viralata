import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import fair from './fair'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    fair
  }
})
