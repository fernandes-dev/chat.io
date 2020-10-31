import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    isdark: false,
  }),
  mutations: {
    toggleTheme(state, data) {
      state.isdark = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
