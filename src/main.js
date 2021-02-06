import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import directive from './directive/index'
import moment from 'moment'

import './assets/icons' // icon
import './permission' // permission control

import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, download, handleTree } from '@/utils/ruoyi'
// 自定义表格工具扩展
// language
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
if (localStorage.getItem('lang') && localStorage.getItem('lang') === 'EN') {
  locale.use(enLocale)
} else {
  locale.use(zhLocale)
}
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'CN', // 语言标识
  messages: {
    'CN': require('./language/zh'), // 中文语言包
    'EN': require('./language/en') // 英文语言包
  }
})
import hls from 'videojs-contrib-hls'
Vue.use(hls)
// 全局方法挂载
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree
Vue.prototype.moment = moment

Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: false, message: msg, type: 'success' })
}

Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: false, message: msg, type: 'error' })
}

Vue.prototype.msgWarning = function(msg) {
  this.$message({ showClose: false, message: msg, type: 'warning' })
}

Vue.prototype.msgInfo = function(msg) {
  // this.$message.info(msg)
  this.$message({ showClose: false, message: msg, type: 'info' })
}

// 全局组件挂载
Vue.use(directive)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
