// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//引入element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//axios请求引入
import axios from 'axios'
Vue.prototype.$http = axios;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//jquery引入  需要配置
/*1、首先，安装jQuery
npm install jquery --save
2、 然后在build/webpack.base.config.js中添加以下代码
var webpack = require('webpack')
3、然后在module中添加以下代码
plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
    "window.jQuery": "jquery"
  })
]*/
import $ from 'jquery'

//bootstrap引入
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import store from './store'



import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 这样就能全局使用vuex了
  components: { App },
  template: '<App/>'
})
