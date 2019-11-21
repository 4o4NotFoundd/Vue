import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'

Vue.prototype.$http=axios
// 全局布局，都能引用，使用$http代替axios,获取json数据
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
