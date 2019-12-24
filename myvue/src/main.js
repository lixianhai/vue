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
import 'echarts//theme/macarons.js'
import './mock'
import 'echarts/map/js/china'
import 'element-ui/lib/theme-chalk/index.css'
import './style/element-ui.less'
import '@/redirect'
import '@/icons'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueParticles) 

Vue.config.productionTip = false

const i18n = new VueI18n({ 
  locale: 'zh', // 定义默认语言为中文 
  messages: {   
      'zh': require('@/languages/zh'),   
      'en': require('@/languages/en') 
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  echarts,
  components: { App },
  template: '<App/>'
})
