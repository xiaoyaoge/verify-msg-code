import VerifyMsgCode from './verifyMsgCode.vue'

const components = [VerifyMsgCode]


const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}
export default {install,VerifyMsgCode}
