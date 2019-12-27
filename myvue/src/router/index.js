import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: { title:'登录',languages:'login' },
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    meta: { title:'404',languages:'404' },
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    meta: { title:'401',languages:'401' },
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
        meta: { title: '首页',icon: 'dashboard',languages:'dashboard',affix: true },
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
        path: 'index',
        component: () => import('@/views/profile'),
        meta: { title: '个人中心',languages:'profile' },
      },
    ]
  }
]

export const asyncRoutes = [
  {
    path:  '/echarts',
    component: Layout,
    meta: { title: '图表',icon: 'chart',languages:'charts' },
    redirect: '/echarts/keyboard',
    children: [
      {
          path:  'pictorialBar',
          component: () => import('@/views/echarts/pictorialBar/index'),
          meta: { title: '象形柱图',icon: 'elephant',languages:'pictorialBarChart' },
          redirect: '/echarts/pictorialBar/waterContent',
          children: [
          {
              path:  'waterContent',
              component: () => import('@/views/echarts/pictorialBar/waterContent'),
              meta: { title: '含量',icon: 'content',languages:'waterContentChart' },
          },
          {
              path:  'forest',
              component: () => import('@/views/echarts/pictorialBar/forest'),
              meta: { title: '森林',icon: 'forest',languages:'forestChart' },
          },
          {
              path:  'christmas',
              component: () => import('@/views/echarts/pictorialBar/christmas'),
              meta: { title: '圣诞驯鹿的面纱',icon: 'reindeer',languages:'christmasChart' },
          },
          {
              path:  'vehicles',
              component: () => import('@/views/echarts/pictorialBar/vehicles'),
              meta: { title: '车辆',icon: 'car',languages:'vehiclesChart' },
          }
      ]
      },
      {
          path:  'keyboard',
          component: () => import('@/views/echarts/keyboard'),
          meta: { title: '键盘图表',icon: 'bridge',languages:'keyboard' },
      },
      {
          path:  'bar',
          component: () => import('@/views/echarts/bar'),
          meta: { title: '柱状图',icon: 'bar',languages:'barChart' },
      },
      {
          path:  'line',
          component: () => import('@/views/echarts/line'),
          meta: { title: '折线图',icon: 'line',languages:'lineChart' },
      },
      {
          path:  'blend',
          component: () => import('@/views/echarts/blend'),
          meta: { title: '混合图表',icon: 'drag',languages:'blendChart' },
      },
      {
          path:  'pie',
          component: () => import('@/views/echarts/pie'),
          meta: { title: '饼图',icon: 'pie',languages:'pieChart' },
      },
      {
          path:  'scatter',
          component: () => import('@/views/echarts/scatter'),
          meta: { title: '散点图',icon: 'scatter',languages:'scatterChart' },
      },
      {
          path:  'radar',
          component: () => import('@/views/echarts/radar'),
          meta: { title: '雷达图',icon: 'radar',languages:'radarChart' },
      },
      {
          path:  'tree',
          component: () => import('@/views/echarts/tree'),
          meta: { title: '树图',icon: 'tree_svg',languages:'treeChart' },
      },
      {
          path:  'sunburst',
          component: () => import('@/views/echarts/sunburst'),
          meta: { title: '旭日图',icon: 'sun',languages:'sunburstChart' },
      },
      {
          path:  'parallel',
          component: () => import('@/views/echarts/parallel'),
          meta: { title: '平行坐标系',icon: 'coordinate',languages:'parallelChart' },
      },
      {
          path:  'funnel',
          component: () => import('@/views/echarts/funnel'),
          meta: { title: '漏斗图',icon: 'funnel',languages:'funnelChart' },
      },
      {
          path:  'gauge',
          component: () => import('@/views/echarts/gauge'),
          meta: { title: '仪表盘',icon: 'dashboard',languages:'gaugeChart' },
      }
    ]
  },


  // // Table

  {
    path: '/table',
    component: Layout,
    meta: { title: 'Table',icon: 'table',languages:'table' },
    redirect: '/table/dynamic-table',
    children: [
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table'),
        meta: { title: '动态 Table',icon: 'dynamic_table',languages:'dynamicTable' }
      },
      {
        path: 'inline-edit-table',
        component: () => import('@/views/table/inline-edit-table'),
        meta: { title: 'Table 内编辑',icon: 'edit_table',languages:'complexTable' }
      },
      {
        path: 'drag-table',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '拖拽 Table',icon: 'drag',languages:'dragTable' }
      },
    ]
  },

  //Permission

  {
    path: '/permission',
    component: Layout,
    meta: { title: '权限测试页',icon: 'permission',languages:'permission' },
    redirect: '/permission/page',
    alwaysShow: true,
    roles: ['admin', 'editor'],
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page-permission'),
        meta: { title: '页面权限',icon: 'page-permission',languages:'permissionPage',roles: ['admin'] }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive-permission'),
        meta: { title: '指令权限',icon: 'directive-permission',languages:'permissionDirective' }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role-permission'),
        meta: { title: '角色权限',icon: 'role-permission',languages:'permissionRole',roles: ['admin'] }
      },
    ]
  },

  //Menu

  {
    path: '/nested',
    component: Layout,
    meta: { title: '路由嵌套',icon: 'nested',languages:'menus' },
    redirect: '/nested/menu1/menu1-1',
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'),
        redirect: '/nested/menu1/menu1-1',
        meta: { title: '菜单 1',icon: 'nested',languages:'menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index'),
            meta: { title: '菜单 1-1',icon: 'nested',languages:'menu1_1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: '菜单 1-2',icon: 'nested',languages:'menu1_2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index'),
                meta: { title: '菜单 1-2-1',icon: 'nested',languages:'menu1_2_1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index'),
                meta: { title: '菜单 1-2-2',icon: 'nested',languages:'menu1_2_2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index'),
            meta: { title: '菜单 1-3',icon: 'nested',languages:'menu1_3' }
          },
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2'),
        meta: { title: '菜单 2',icon: 'nested',languages:'menu2' }
      },
    ]
  },

  // // Excel

  {
    path: '/excel',
    component: Layout,
    meta: { title: 'Excel',icon: 'excel',languages:'excel' },
    redirect: '/excel/export-excel',
    children: [
      {
        path: '/excel/export-excel',
        component: () => import('@/views/excel/export-excel'),
        meta: { title: '导出 Excel',icon: 'export_excel',languages:'importExcel' },
      },
      {
        path: '/excel/merge-header',
        component: () => import('@/views/excel/merge-header'),
        meta: { title: 'Excel 多级表头',icon: 'header_excel',languages:'mergeHeader' },
      },
      {
        path: '/excel/select-excel',
        component: () => import('@/views/excel/select-excel'),
        meta: { title: 'Excel 已选择项',icon: 'selected_excel',languages:'importSelected' },
      }
    ]
  },
  
  // // Components
  
  {
    path: '/components',
    component: Layout,
    meta: { title: '组件',icon: 'component',languages:'components' },
    redirect: '/components/button',
    children: [
      {
        path: 'button',
        component: () => import('@/views/components/button'),
        meta: { title: '按钮',icon: 'button',languages:'button' },
      },
      {
        path: 'form',
        component: () => import('@/views/components/form'),
        meta: { title: '表单',icon: 'form',languages:'form' },
      },
      {
        path: 'collapse',
        component: () => import('@/views/components/collapse'),
        meta: { title: '折叠面板',icon: 'fold_svg',languages:'collapse' },
      },
      {
        path: 'carousel',
        component: () => import('@/views/components/carousel'),
        meta: { title: '走马灯',icon: 'riding_svg',languages:'carousel' },
      },
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
        meta: { title: 'Icons',icon: 'icon',languages:'icons' }
      }
    ]
  },

  // Error page

  {
    path: '/error-page',
    component: Layout,
    meta: { title: '错误页面',icon: '404',languages:'errprPage' },
    redirect: '/error-page/401',
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        meta: { title: '401',icon: '401',languages:'401' }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        meta: { title: '404',icon: '404',languages:'404' }
      }
    ]
  },
  
  // // Zip

  {
    path: '/zip',
    component: Layout,
    meta: { title: 'Zip',icon: 'export_zip',languages:'zip' },
    alwaysShow: true,
    redirect: '/zip',
    children: [
      {
        path: 'index',
        component: () => import('@/views/zip'),
        meta: { title: 'Export Zip',icon: 'export_zip',languages:'zipIndex' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  mode: 'hash', // require service support
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