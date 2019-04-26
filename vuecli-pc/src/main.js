// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';//全局引入element-ui框架
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'

Vue.prototype.$http= axios//全局使用axios请求

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts//全局使用echarts图表

import $ from 'jquery'//使用jquery

import App from './App'
import router from './router'
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
