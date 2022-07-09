import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "@/store/modules/AuthModule";
import MainModule from "@/store/modules/MainModule";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    AuthModule,
    MainModule,
  },
});
