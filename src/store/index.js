import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
    clearUser(state) {
      state.user = null
    },
    setAvatar(state, newAvatar) {
      state.user.avatar = newAvatar
    },
    setIntro(state, newIntro) {
      state.user.intro = newIntro
    }
  },
  actions: {
  },
  modules: {
  },
  strict: true
})
