import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AnimateCss from "animate.css"


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(AnimateCss);


// 添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
