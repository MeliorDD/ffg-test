import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "@/store/modules/AuthModule";
import ContentModule from "@/store/modules/ContentModule";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowPreloader: false,
  },
  mutations: {
    TOGGLE_SHOW_PRELOADER(state, payload) {
      state.isShowPreloader = payload;
    },
  },
  actions: {
    showPreloaderAction({ commit }) {
      commit("TOGGLE_SHOW_PRELOADER", true);
    },
    hidePreloaderAction({ commit }) {
      commit("TOGGLE_SHOW_PRELOADER", false);
    },
  },
  modules: {
    AuthModule,
    ContentModule,
  },
});
