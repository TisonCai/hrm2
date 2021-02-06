import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公共路由
import Layout from '@/layout/OkrLayout.vue'
/*
1. 要把每个模块的第一个route要加redirect，才会渲染嵌套的路由
   children正常跳
*/
export const constantRoutes = [
  {
    path: '/okr',
    component: Layout,
    redirect: '/okr/okr1',
    children: [
      {
        path: 'okr1',
        component: () => import('@/views/okr/okr1.vue'),
        meta: {
          title: 'OKR1',
          icon: 'customer-solid'
        }
      }
    ]
  },
  {
    path: '/okr',
    component: Layout,
    children: [
      {
        path: 'okr2',
        component: () => import('@/views/okr/okr2.vue'),
        meta: {
          title: 'OKR2',
          icon: 'customer-solid'
        }
      }
    ]
  },
  {
    path: '/okr',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: 'OKR3-4',
      icon: 'customer-solid'
    },
    children: [
      {
        path: 'okr3',
        component: () => import('@/views/okr/okr3.vue'),
        meta: {
          title: 'OKR3',
          icon: 'customer-solid'
        }
      },
      {
        path: 'okr4',
        component: () => import('@/views/okr/okr4.vue'),
        meta: {
          title: 'OKR4',
          icon: 'customer-solid'
        }
      }
    ]
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
    hidden: true
  }
]

export default new Router({
  // mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
