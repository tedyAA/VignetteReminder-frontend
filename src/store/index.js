import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import vehicles from "./modules/vehicles";
import reminders from "./modules/reminders";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    vehicles,
    reminders
  }
})
