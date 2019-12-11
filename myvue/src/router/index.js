import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/dashboard',
          component: () => import('@/views/dashboard'),
          meta: { title:'首页' },
        }
      ]
    }
  ]
})
