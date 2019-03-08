import Vue from 'vue'
import App from './index.vue'
import store from "./vuex";
import * as util from './utils'

Vue.config.productionTip = false
Vue.prototype.util = util;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
