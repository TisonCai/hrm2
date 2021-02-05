import hasRole from './permission/hasRole'
import hasPermi from './permission/hasPermi'
import src from './src/index'

const install = function(Vue) {
  Vue.directive('hasRole', hasRole)
  Vue.directive('hasPermi', hasPermi)
  Vue.directive('src', src)
}

if (window.Vue) {
  window['hasRole'] = hasRole
  window['hasPermi'] = hasPermi
  window['src'] = src
  Vue.use(install); // eslint-disable-line
}

export default install
