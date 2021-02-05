import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = []

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  return
  // if (getToken()) {
  //   debugger
  //   /* has token*/
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     // 有token就有了用户信息
  //     // 1.判断有无路由信息，没有的话，拉取路由数据，拉取失败直接登出
  //     store.dispatch('GenerateRoutes').then(accessRoutes => {
  //       debugger
  //       console.log('a', accessRoutes)
  //       // router.addRoutes(accessRoutes) // 动态添加可访问路由表
  //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
  //     }).catch(e => {
  //       store.dispatch('LogOut').then(() => {
  //         Message.error(e)
  //         next({ path: '/' })
  //         // TODO: 这里还需要处理

  //         // store.dispatch('Login', to).then(res => {
  //         //   next(`/`)
  //         //   NProgress.done()
  //         // })
  //       })
  //     })
  //     // if (store.getters.roles.length === 0) {
  //     //   // 判断当前用户是否已拉取完user_info信息
  //     //   store.dispatch('GetInfo').then(res => {
  //     //     // 拉取user_info
  //     //     const roles = res.roles
  //     //     store.dispatch('GenerateRoutes', { roles }).then(accessRoutes => {
  //     //       // 根据roles权限生成可访问的路由表
  //     //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
  //     //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
  //     //     })
  //     //   }).catch(err => {
  //     //     store.dispatch('LogOut').then(() => {
  //     //       Message.error(err)
  //     //       next({ path: '/' })
  //     //     })
  //     //   })
  //     // } else {
  //     //   next()
  //     // }
  //   }
  // } else {
  //   // 没有token
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // 在免登录白名单，直接进入
  //     next()
  //     NProgress.done()
  //   } else if (to.path === `/login`) {
  //     store.dispatch('Login', to).then(res => {
  //       next(`/`)
  //       NProgress.done()
  //     })
  //   } else {
  //     // 否则全部重定向到登录页
  //     next(`/login`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done()
})
