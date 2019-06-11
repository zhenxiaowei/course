// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

//设置token 和请求头
//axios.default.headers.common['token']=""
//axios.default.headers.post["Content-type"]="application/json"

Vue.prototype.$axios=axios//为了全局使用
//全局守卫
// router.beforeEach((to,from,next)=>{
//   //alert("还没有登录，请先登录");
//   //next()
//   console.log(to);
//   //判断store.gettes.isLogin===false
//   if(to.path=='/login' || to.path=='/register'){
//     next()
//   }else{
//     alert("还没有登录，请先登录");
//     next('/login')
//   }
// });

//后置钩子  (很少使用)
// router.afterEach((to, from) => {
//   alert('after each');
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
