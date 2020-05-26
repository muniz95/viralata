import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    user: {}
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      state.user = userData.user
    },
    clearAuth (state) {
      state.idToken = null
      state.userId = null
      state.user = {}
    }
  },
  actions: {
    login ({ commit }, authData) {
      axios.post(`${process.env.VUE_APP_API_URL}/login`, authData)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.headers.authorization)
          localStorage.setItem('userId', res.data.localId)
          commit('authUser', {
            token: res.headers.authorization,
            userId: res.data.id,
            user: res.data
          })
          router.push('/')
        })
        .catch(error => console.log(error))
    }
  },
  modules: {
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})
