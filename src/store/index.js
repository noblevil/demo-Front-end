import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import logs from './modules/logs'
import dict from './modules/dict'
import getters from './getters'



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

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },



  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }

})



export default store
