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
              path:'/echarts/keyboard',
              component: () => import('@/views/echarts/components/keyboard'),
              meta: { title:'键盘图表' },
            },
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
              path:'/echarts/blend',
              component: () => import('@/views/echarts/components/blend'),
              meta: { title:'混合图表' },
            },
            {
              path:'/echarts/pie',
              component: () => import('@/views/echarts/components/pie'),
              meta: { title:'饼图' },
            },
            {
              path:'/echarts/scatter',
              component: () => import('@/views/echarts/components/scatter'),
              meta: { title:'散点图' },
            },
            {
              path:'/echarts/radar',
              component: () => import('@/views/echarts/components/radar'),
              meta: { title:'雷达图' },
            },
            {
              path:'/echarts/tree',
              component: () => import('@/views/echarts/components/tree'),
              meta: { title:'树图' },
            },
            {
              path:'/echarts/sunburst',
              component: () => import('@/views/echarts/components/sunburst'),
              meta: { title:'旭日图' },
            },
            {
              path:'/echarts/parallel',
              component: () => import('@/views/echarts/components/parallel'),
              meta: { title:'平行坐标系' },
            },
            {
              path:'/echarts/funnel',
              component: () => import('@/views/echarts/components/funnel'),
              meta: { title:'漏斗图' },
            },
            {
              path:'/echarts/gauge',
              component: () => import('@/views/echarts/components/gauge'),
              meta: { title:'仪表盘' },
            },
            {
              path:'/echarts/pictorialBar',
              component: () => import('@/views/echarts/components/pictorialBar/index.vue'),
              meta: { title:'象形柱图' },
              children: [
                {
                  path:'/echarts/pictorialBar/waterContent',
                  component: () => import('@/views/echarts/components/pictorialBar/waterContent'),
                  meta: { title:'含量' },
                },
                {
                  path:'/echarts/pictorialBar/forest',
                  component: () => import('@/views/echarts/components/pictorialBar/forest'),
                  meta: { title:'森林' },
                },
                {
                  path:'/echarts/pictorialBar/christmas',
                  component: () => import('@/views/echarts/components/pictorialBar/christmas'),
                  meta: { title:'圣诞驯鹿的面纱' },
                },
                {
                  path:'/echarts/pictorialBar/vehicles',
                  component: () => import('@/views/echarts/components/pictorialBar/vehicles'),
                  meta: { title:'车辆' },
                }
              ]
            },
          ]
        },
        {
          path: '/icons',
          component: () => import('@/views/icons'),
          meta: { title:'首页' },
        },
        {
          path: '/error-page',
          component: () => import('@/views/error-page'),
          meta: { title:'错误页面' },
          children: [
            {
              path: '/error-page/401',
              component: () => import('@/views/error-page/components/401'),
              meta: { title:'401' }
            },
            {
              path: '/error-page/404',
              component: () => import('@/views/error-page/components/404'),
              meta: { title:'404' }
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
          children: [
            {
              path: '/components/button',
              component: () => import('@/views/components/components/button'),
              meta: { title:'按钮' },
            },
            {
              path: '/components/form',
              component: () => import('@/views/components/components/form'),
              meta: { title:'表单' },
            },
            {
              path: '/components/collapse',
              component: () => import('@/views/components/components/collapse'),
              meta: { title:'折叠面板' },
            },
            {
              path: '/components/carousel',
              component: () => import('@/views/components/components/carousel'),
              meta: { title:'走马灯' },
            },
          ]
        },
      ]
    }
  ]
})
