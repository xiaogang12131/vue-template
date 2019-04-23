// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filters'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'common/styles/index.styl'

Vue.config.productionTip = false

/* 自定义过滤器，挂载到全局*/
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

/* 引入element-ui */
Vue.use(ElementUI);

// 引入mockjs
require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
