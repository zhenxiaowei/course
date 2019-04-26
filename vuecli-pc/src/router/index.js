import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from '@/components/Element-ui'//使用框架
import Less from '@/components/Less'//使用Less
import Axios from '@/components/Axios'//使用Axios
import Echarts from '@/components/Echarts'//使用Echarts
import Jquery from '@/components/Jquery'//使用Jquery
import Bootstrap from '@/components/Bootstrap'//使用Bootstrap
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Bootstrap
    }
  ]
})
