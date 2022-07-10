import axios from "axios";
export default {
  namespaced: true,
  state: {
    dataList: [],
  },
  mutations: {
    SET_DATA_LIST(state, payload) {
      state.dataList = payload;
    },
  },
  actions: {
    async getDataAction({ commit }) {
      await axios("https://jsonplaceholder.typicode.com/todos").then(
        (response) => {
          commit("SET_DATA_LIST", response.data);
        }
      );
    },
  },
};
