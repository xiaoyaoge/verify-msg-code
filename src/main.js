import Vue from 'vue'
import App from './App.vue'
import VerifyMsgCode from './lib/index.js'
Vue.use(VerifyMsgCode)

new Vue({
  el: '#app',
  render: h => h(App)
})
