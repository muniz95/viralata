import axios from 'axios'

export default {
  state: () => ({
    fairs: []
  }),
  mutations: {
    setFairs (state, fairs) {
      state.fairs = fairs
    }
  },
  actions: {
    getAllFairs ({ commit, rootState }) {
      const header = {
        header: {
          Authorization: `Bearer ${rootState.auth.token}`
        }
      }
      axios.get(`${process.env.VUE_APP_API_URL}/fairs`, header)
        .then(res => {
          console.log(res)
          commit('setFairs', res.data)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    fairs (state) {
      return state.fairs
    }
  }
}
