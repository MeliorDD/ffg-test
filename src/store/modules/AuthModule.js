export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || null,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
  },
  actions: {
    onLogin({ commit }, { login, password }) {
      commit("SET_TOKEN", `${login + password}`);
    },
  },
};
