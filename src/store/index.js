import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import logs from './modules/logs'
import dict from './modules/dict'
import getters from './getters'

function storeLocalStore(state) {
  window.localStorage.setItem("userMsg", JSON.stringify(state));
}

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common,
    logs,
    tags,
    dict
  },
  getters,
})

export default store
