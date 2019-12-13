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
          name:'Dashboard',
          meta: { title:'首页' },
        },
        {
          path: '/echarts',
          component: () => import('@/views/echarts'),
          meta: { title:'图表' },
          children: [
            {
              path:'/echarts/bar',
              component: () => import('@/views/echarts/components/bar'),
              meta: { title:'柱状图' },
            },
            {
              path:'/echarts/line',
              component: () => import('@/views/echarts/components/line'),
              meta: { title:'折线图' },
            },
            {
              path:'/echarts/pie',
              component: () => import('@/views/echarts/components/pie'),
              meta: { title:'饼状图' },
            }
          ]
        },
        {
          path: '/profile',
          component: () => import('@/views/profile'),
          meta: { title:'个人中心' },
        },
        {
          path: '/components',
          component: () => import('@/views/components'),
          meta: { title:'组件' },
        },
      ]
    }
  ]
})
