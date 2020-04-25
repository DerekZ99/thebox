import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowVideo: false,
    isHideVideo: true,
    isShowFooter: false,
    isIpadSize:false,
    curPath:''
  },
  mutations: {
    changeCurPath(state, path) {
      state.curPath = path
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
    },
    showFooter(state, val) {
      if (val <= 479) {
        state.isShowFooter = false
      } else {
        state.isShowFooter = true
      }
      if (val <= 769 && val >480) {
        state.isIpadSize = true
      } else
        state.isIpadSize = false
    }
  },
  actions: {},
  modules: {}
})