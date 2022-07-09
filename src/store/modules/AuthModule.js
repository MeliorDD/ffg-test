export default {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  mutations: {
    TOGGLE_IS_LOGGED(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    login() {},
    logout() {},
  },
};
