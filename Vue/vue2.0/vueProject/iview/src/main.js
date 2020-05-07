// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import './assets/css/bootstrap.css'
import './assets/js/bootstrap'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
