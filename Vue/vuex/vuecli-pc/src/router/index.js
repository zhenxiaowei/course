import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from '@/components/Element-ui'//使用框架
import Axios from '@/components/Axios'//使用Axios
import Echarts from '@/components/Echarts'//使用Echarts
import Jquery from '@/components/Jquery'//使用Jquery
import Less from '@/components/Less'//使用Less
import Bootstrap from '@/components/Bootstrap'//使用Bootstrap
import Swiper from '@/components/Swiper'//使用Swiper


import vuexA from '@/components/vuexA'
import vuexB from '@/components/vuexB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuexA',
      component: vuexA
    },
    {
      path: '/vuexA',
      name: 'vuexA',
      component: vuexA
    },
    {
      path: '/vuexB',
      name: 'vuexB',
      component: vuexB
    }
  ]
})
