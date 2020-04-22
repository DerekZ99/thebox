import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowVideo: false,
    isHideVideo: true,
  },
  mutations: {
    changeCurPath(state, path) {
      if (path === "/home") {
        state.isShowVideo = true
      } else {
        state.isShowVideo = false
      }
      if (path === "/collection") {
        state.isHideVideo = false
      } else {
        state.isHideVideo = true
      }
    }
  },
  actions: {},
  modules: {}
})