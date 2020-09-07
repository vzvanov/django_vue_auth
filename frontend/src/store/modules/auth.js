import authService from '../../services/authService'

const state = {
  isLogin: false,
  token_key: ''  
}
  
const mutations = {
  userLogin(state, data) {
    if (data) {
      state.isLogin = true
      state.token_key = data.key
    }
  },

  userRegistration(state, data) {
    if (data) {
      state.isLogin = true
      state.token_key = data.key
    }
  },  

  userLogout(state) {
    state.isLogin = false
    state.token_key = ''
  },

}
  
const actions = {
  userLogin({ commit }, user) {
    authService.fetchLogin(user)
      .then(data => {
        commit('userLogin', data)
    })
  },

  userRegistration({ commit }, user) {
    authService.fetchRegistration(user)
      .then(data => {
        commit('userRegistration', data)
    })
  },
  
  userLogout({ commit }) {
    commit('userLogout') 
  },
  
}
  
const getters = {
  isLogin: s => s.isLogin,
  token_key: s => s.token_key
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}