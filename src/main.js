import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AnimateCss from "animate.css"
import vueLazy from "vue-lazyload"

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(AnimateCss);
// vueLazy.use(vueLazy)

Vue.use(vueLazy, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
// 添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')