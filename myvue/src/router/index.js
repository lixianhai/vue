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
          path: '/',
          component: Layout,
          redirect: '/dashboard',
        }
      ]
    },

    // Echarts

    {
      path:'/echarts',
      component: Layout,
      meta: { title:'图表' },
      redirect: '/echarts/keyboard', 
      children: [
        {
          path:'pictorialBar',
          component: () => import('@/views/echarts/pictorialBar/index'),
          meta: {title: '象形柱图'},
          children: [
            {
              path:'waterContent',
              component: () => import('@/views/echarts/pictorialBar/waterContent'),
              meta: { title:'含量' },
            },
            {
              path:'forest',
              component: () => import('@/views/echarts/pictorialBar/forest'),
              meta: { title:'森林' },
            },
            {
              path:'christmas',
              component: () => import('@/views/echarts/pictorialBar/christmas'),
              meta: { title:'圣诞驯鹿的面纱' },
            },
            {
              path:'vehicles',
              component: () => import('@/views/echarts/pictorialBar/vehicles'),
              meta: { title:'车辆' },
            }
          ]
        },
        {
          path:'keyboard',
          component: () => import('@/views/echarts/keyboard'),
          meta: { title:'键盘图表' },
        },
        {
          path:'bar',
          component: () => import('@/views/echarts/bar'),
          meta: { title:'柱状图' },
        },
        {
          path:'line',
          component: () => import('@/views/echarts/line'),
          meta: { title:'折线图' },
        },
        {
          path:'blend',
          component: () => import('@/views/echarts/blend'),
          meta: { title:'混合图表' },
        },
        {
          path:'pie',
          component: () => import('@/views/echarts/pie'),
          meta: { title:'饼图' },
        },
        {
          path:'scatter',
          component: () => import('@/views/echarts/scatter'),
          meta: { title:'散点图' },
        },
        {
          path:'radar',
          component: () => import('@/views/echarts/radar'),
          meta: { title:'雷达图' },
        },
        {
          path:'tree',
          component: () => import('@/views/echarts/tree'),
          meta: { title:'树图' },
        },
        {
          path:'sunburst',
          component: () => import('@/views/echarts/sunburst'),
          meta: { title:'旭日图' },
        },
        {
          path:'parallel',
          component: () => import('@/views/echarts/parallel'),
          meta: { title:'平行坐标系' },
        },
        {
          path:'funnel',
          component: () => import('@/views/echarts/funnel'),
          meta: { title:'漏斗图' },
        },
        {
          path:'gauge',
          component: () => import('@/views/echarts/gauge'),
          meta: { title:'仪表盘' },
        },
      ]
    },

    // // Table

    {
      path: '/table',
      component: Layout,
      meta: { title:'Table' },
      redirect: '/table/dynamic-table',
      children: [
        {
          path: 'dynamic-table',
          component: () => import('@/views/table/dynamic-table'),
          meta: { title:'动态 Table' }
        },
        {
          path: 'inline-edit-table',
          component: () => import('@/views/table/inline-edit-table'),
          meta: { title:'Table 内编辑' }
        },
        {
          path: 'drag-table',
          component: () => import('@/views/table/drag-table'),
          meta: { title:'拖拽 Table' }
        },
      ]
    },

    // // Excel

    {
      path: '/excel',
      component: Layout,
      meta: { title:'导出 Excel' },
      redirect: '/excel/export-excel',
      children: [
        {
          path: '/excel/export-excel',
          component: () => import('@/views/excel/export-excel'),
          meta: { title:'导出 Excel' },
        },
        {
          path: '/excel/merge-header',
          component: () => import('@/views/excel/merge-header'),
          meta: { title:'Excel 多级表头' },
        },
        {
          path: '/excel/select-excel',
          component: () => import('@/views/excel/select-excel'),
          meta: { title:'Excel 已选择项' },
        }
      ]
    },
    
    // // Components
    
    {
      path: '/components',
      component: Layout,
      meta: { title:'组件' },
      redirect: '/components/button',
      children: [
        {
          path: 'button',
          component: () => import('@/views/components/button'),
          meta: { title:'按钮' },
        },
        {
          path: 'form',
          component: () => import('@/views/components/form'),
          meta: { title:'表单' },
        },
        {
          path: 'collapse',
          component: () => import('@/views/components/collapse'),
          meta: { title:'折叠面板' },
        },
        {
          path: 'carousel',
          component: () => import('@/views/components/carousel'),
          meta: { title:'走马灯' },
        },
      ]
    },
    
    // // Zip

    {
      path: '/zip',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/zip'),
          meta: { title:'Export Zip' }
        }
      ]
    },

    // Icons

    {
      path: '/icons',
      component: Layout,
      meta: { title:'Zip' },
      redirect: '/icons',
      children: [
        {
          path: 'index',
          component: () => import('@/views/icons'),
          meta: { title:'Icons' }
        }
      ]
    },

    // Error page

    {
      path: '/error-page',
      component: Layout,
      meta: { title:'Error Page' },
      redirect: '/error-page/401',
      children: [
        {
          path: '401',
          component: () => import('@/views/error-page/401'),
          meta: { title:'401' }
        },
        {
          path: '404',
          component: () => import('@/views/error-page/404'),
          meta: { title:'404' }
        }
      ]
    },

    // Profile

    {
      path: '/profile',
      component: Layout,
      meta: { title:'个人中心' },
      redirect: '/profile',
      children: [
        {
          path: '/profile',
          component: () => import('@/views/profile'),
          meta: { title:'个人中心' },
        },
      ]
    }
  ]
})



 // Echarts page2

        // {
        //   path:'/echarts/pictorialBar/waterContent',
        //   component: () => import('@/views/echarts/pictorialBar/waterContent'),
        //   meta: { title:'含量' },
        // },
        // {
        //   path:'/echarts/pictorialBar/forest',
        //   component: () => import('@/views/echarts/pictorialBar/forest'),
        //   meta: { title:'森林' },
        // },
        // {
        //   path:'/echarts/pictorialBar/christmas',
        //   component: () => import('@/views/echarts/pictorialBar/christmas'),
        //   meta: { title:'圣诞驯鹿的面纱' },
        // },
        // {
        //   path:'/echarts/pictorialBar/vehicles',
        //   component: () => import('@/views/echarts/pictorialBar/vehicles'),
        //   meta: { title:'车辆' },
        // },

        // // Zip

        // {
        //   path: '/zip',
        //   component: () => import('@/views/zip'),
        //   meta: { title:'Export Zip' },
        // },

        // // Icons

        // {
        //   path: '/icons',
        //   component: () => import('@/views/icons'),
        //   meta: { title:'首页' },
        // },

        // // Error page

        // {
        //   path: '/error-page/401',
        //   component: () => import('@/views/error-page/401'),
        //   meta: { title:'401' }
        // },
        // {
        //   path: '/error-page/404',
        //   component: () => import('@/views/error-page/404'),
        //   meta: { title:'404' }
        // },

        // // Profile

        // {
        //   path: '/profile',
        //   component: () => import('@/views/profile'),
        //   meta: { title:'个人中心' },
        // },

        // // Components

        // {
        //   path: '/components/button',
        //   component: () => import('@/views/components/button'),
        //   meta: { title:'按钮' },
        // },
        // {
        //   path: '/components/form',
        //   component: () => import('@/views/components/form'),
        //   meta: { title:'表单' },
        // },
        // {
        //   path: '/components/collapse',
        //   component: () => import('@/views/components/collapse'),
        //   meta: { title:'折叠面板' },
        // },
        // {
        //   path: '/components/carousel',
        //   component: () => import('@/views/components/carousel'),
        //   meta: { title:'走马灯' },
        // },