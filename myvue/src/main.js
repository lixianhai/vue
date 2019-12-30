// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import VueParticles from 'vue-particles'
import echarts from 'echarts'
import Cookies from 'js-cookie'
import 'echarts//theme/macarons.js'
import './mock'
import 'echarts/map/js/china'
import 'element-ui/lib/theme-chalk/index.css'
import './style/element-ui.less'
import '../theme/index.css'
import '@/redirect'
import '@/icons'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueParticles) 

Vue.config.productionTip = false

const i18n = new VueI18n({ 
  locale: Cookies.get('Languages') || 'zh', // 定义默认语言为中文 
  messages: {   
    'zh': require('@/languages/zh'),   
    'en': require('@/languages/en'),
    'ja': require('@/languages/ja'),
    'ko': require('@/languages/ko')
  }
});

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  i18n,
  store,
  echarts,
  components: { App },
  template: '<App/>'
})

export default vue
