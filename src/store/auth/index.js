import axios from 'axios'
import router from '@/router'

export default {
  state: () => ({
    idToken: localStorage.getItem('token'),
    user: localStorage.getItem('user'),
    openMenu: false
  }),
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.user = userData.user
    },
    clearAuth (state) {
      state.idToken = null
      state.user = {}
    },
    switchMenu (state, isMenuOpen) {
      state.openMenu = isMenuOpen
    }
  },
  actions: {
    login ({ commit }, authData) {
      axios.post(`${process.env.VUE_APP_API_URL}/login`, authData)
        .then(res => {
          localStorage.setItem('token', res.headers.authorization)
          localStorage.setItem('user', res.data)
          commit('authUser', {
            token: res.headers.authorization,
            user: res.data
          })
          router.push('/')
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    },
    openMenu (state) {
      return state.openMenu
    }
  }
}
