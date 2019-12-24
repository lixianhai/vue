import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: { title:'登录' },
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard'),
        name:  'Dashboard',
        meta: { title: '首页',icon: 'dashboard',affix: true },
      }
    ]
  },

  {
    path:  '/echarts',
    component: Layout,
    meta: { title: '图表',icon: 'chart',roles:['admin'] },
    redirect: '/echarts/keyboard',
    children: [
      {
          path:  'pictorialBar',
          component: () => import('@/views/echarts/pictorialBar/index'),
          meta: { title: '象形柱图',icon: 'elephant',roles:['admin'] },
          children: [
          {
              path:  'waterContent',
              component: () => import('@/views/echarts/pictorialBar/waterContent'),
              meta: { title: '含量',icon: 'content',roles:['admin'] },
          },
          {
              path:  'forest',
              component: () => import('@/views/echarts/pictorialBar/forest'),
              meta: { title: '森林',icon: 'forest',roles:['admin'] },
          },
          {
              path:  'christmas',
              component: () => import('@/views/echarts/pictorialBar/christmas'),
              meta: { title: '圣诞驯鹿的面纱',icon: 'reindeer',roles:['admin'] },
          },
          {
              path:  'vehicles',
              component: () => import('@/views/echarts/pictorialBar/vehicles'),
              meta: { title: '车辆',icon: 'car',roles:['admin'] },
          }
      ]
      },
      {
          path:  'keyboard',
          component: () => import('@/views/echarts/keyboard'),
          meta: { title: '键盘图表',icon: 'bridge',roles:['admin'] },
      },
      {
          path:  'bar',
          component: () => import('@/views/echarts/bar'),
          meta: { title: '柱状图',icon: 'bar',roles:['admin'] },
      },
      {
          path:  'line',
          component: () => import('@/views/echarts/line'),
          meta: { title: '折线图',icon: 'line',roles:['admin'] },
      },
      {
          path:  'blend',
          component: () => import('@/views/echarts/blend'),
          meta: { title: '混合图表',icon: 'drag',roles:['admin'] },
      },
      {
          path:  'pie',
          component: () => import('@/views/echarts/pie'),
          meta: { title: '饼图',icon: 'pie',roles:['admin'] },
      },
      {
          path:  'scatter',
          component: () => import('@/views/echarts/scatter'),
          meta: { title: '散点图',icon: 'scatter',roles:['admin'] },
      },
      {
          path:  'radar',
          component: () => import('@/views/echarts/radar'),
          meta: { title: '雷达图',icon: 'radar',roles:['admin'] },
      },
      {
          path:  'tree',
          component: () => import('@/views/echarts/tree'),
          meta: { title: '树图',icon: 'tree_svg',roles:['admin'] },
      },
      {
          path:  'sunburst',
          component: () => import('@/views/echarts/sunburst'),
          meta: { title: '旭日图',icon: 'sun',roles:['admin'] },
      },
      {
          path:  'parallel',
          component: () => import('@/views/echarts/parallel'),
          meta: { title: '平行坐标系',icon: 'coordinate',roles:['admin'] },
      },
      {
          path:  'funnel',
          component: () => import('@/views/echarts/funnel'),
          meta: { title: '漏斗图',icon: 'funnel',roles:['admin'] },
      },
      {
          path:  'gauge',
          component: () => import('@/views/echarts/gauge'),
          meta: { title: '仪表盘',icon: 'dashboard',roles:['admin'] },
      }
    ]
  },

  // // Table

  {
    path: '/table',
    component: Layout,
    meta: { title: 'Table',icon: 'table' },
    redirect: '/table/dynamic-table',
    children: [
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table'),
        meta: { title: '动态 Table',icon: 'dynamic_table' }
      },
      {
        path: 'inline-edit-table',
        component: () => import('@/views/table/inline-edit-table'),
        meta: { title: 'Table 内编辑',icon: 'edit_table' }
      },
      {
        path: 'drag-table',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '拖拽 Table',icon: 'drag' }
      },
    ]
  },

  // // Excel

  {
    path: '/excel',
    component: Layout,
    meta: { title: 'Excel',icon: 'excel' },
    redirect: '/excel/export-excel',
    children: [
      {
        path: '/excel/export-excel',
        component: () => import('@/views/excel/export-excel'),
        meta: { title: '导出 Excel',icon: 'export_excel' },
      },
      {
        path: '/excel/merge-header',
        component: () => import('@/views/excel/merge-header'),
        meta: { title: 'Excel 多级表头',icon: 'header_excel' },
      },
      {
        path: '/excel/select-excel',
        component: () => import('@/views/excel/select-excel'),
        meta: { title: 'Excel 已选择项',icon: 'selected_excel' },
      }
    ]
  },
  
  // // Components
  
  {
    path: '/components',
    component: Layout,
    meta: { title: '组件',icon: 'component',size:'3' },
    redirect: '/components/button',
    children: [
      {
        path: 'button',
        component: () => import('@/views/components/button'),
        meta: { title: '按钮',icon: 'button' },
      },
      {
        path: 'form',
        component: () => import('@/views/components/form'),
        meta: { title: '表单',icon: 'form' },
      },
      {
        path: 'collapse',
        component: () => import('@/views/components/collapse'),
        meta: { title: '折叠面板',icon: 'fold_svg' },
      },
      {
        path: 'carousel',
        component: () => import('@/views/components/carousel'),
        meta: { title: '走马灯',icon: 'riding_svg' },
      },
    ]
  },
  
  // // Zip

  {
    path: '/zip',
    component: Layout,
    meta: { title: 'Zip',icon: 'export_zip' },
    alwaysShow: true,
    redirect: '/zip',
    children: [
      {
        path: 'index',
        component: () => import('@/views/zip'),
        meta: { title: 'Export Zip',icon: 'export_zip' }
      }
    ]
  },

  // Icons

  {
    path: '/icons',
    component: Layout,
    redirect: '/icons',
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons'),
        meta: { title: 'Icons',icon: 'icon' }
      }
    ]
  },

  // Error page

  {
    path: '/error-page',
    component: Layout,
    meta: { title: 'Error Page',icon: '404' },
    redirect: '/error-page/401',
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        meta: { title: '401',icon: '401' }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        meta: { title: '404',icon: '404' }
      }
    ]
  },

  // Profile

  {
    path: '/profile',
    component: Layout,
    meta: { title: '个人中心' },
    redirect: '/profile',
    hidden: true,
    children: [
      {
        path: '/profile',
        component: () => import('@/views/profile'),
        meta: { title: '个人中心' },
      },
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    meta: { title: '权限测试页',icon: 'permission' },
    redirect: '/permission/page',
    alwaysShow: true,
    roles: ['admin', 'editor'],
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page-permission'),
        meta: { title: '页面权限',icon: 'page-permission',roles: ['admin'] }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive-permission'),
        meta: { title: '指令权限',icon: 'directive-permission' }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role-permission'),
        meta: { title: '角色权限',icon: 'role-permission',roles: ['admin'] }
      },
    ]
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router