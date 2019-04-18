// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
const router=new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/HelloWorld",component:HelloWorld},
  ],
  mode:"history"//删除地址中的/#/
})
//全局注册组件
//import Users from './components/Users'
//Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//index.html->main.js->App.vue
