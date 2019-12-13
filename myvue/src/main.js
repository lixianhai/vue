// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import './style/element-ui.less'
import '@/redirect'
import '@/icons'

Vue.use(ElementUI)
Vue.use(VueI18n)

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
  components: { App },
  template: '<App/>'
})