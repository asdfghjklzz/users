// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuecookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css';
// 引用API文件
import api from './api/index.js'
//使用插件
Vue.use(ElementUI)
Vue.use(Vuecookies)
//绑定Cookies到全局
Vue.prototype.$cookies = Vuecookies
// 将API方法绑定到全局
Vue.prototype.$api = api



Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.querySelector('input').focus()
  }
})

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
