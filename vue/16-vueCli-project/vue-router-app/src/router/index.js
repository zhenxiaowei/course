import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import About from '@/components/about/About'
//二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'

//三级路由
import Phone from '@/components/about/contact/Phone'
import PersonName from '@/components/about/contact/PersonName'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/', name: 'homeLink', components: {
        default: Home,//默认显示的组件   router-view的复用
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History,
      }
    },
    {path: '/menu', name: 'menuLink', component: Menu},
    {
      path: '/admin', name: 'adminLink', component: Admin,
      //beforeEnter: (to, form, next) => {
      //路由独享的守卫
      //alert("非登录状态，不能访问");
      // next(false)
      //   //判断store.gettes.isLogin===false
      // if (to.path == '/login' || to.path == '/register') {
      //   next()
      // } else {
      //   alert("还没有登录，请先登录");
      //   next('/login')
      // }
      //}
    },
    {path: '/login', name: 'loginLink', component: Login},
    {path: '/register', name: 'registerLink', component: Register},
    {
      path: '/about', name: 'aboutLink', component: About, children: [
        {
          path: '/about/contact', name: 'contactLink', redirect: '/personName', component: Contact, children: [
            {path: '/phone', name: 'phoneNumber', component: Phone},
            {path: '/personName', name: 'personNameNumber', component: PersonName},
          ]
        },
        {path: '/history', name: 'historyLink', component: History},
        {path: '/delivery', name: 'deliveryLink', component: Delivery},
        {path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide}
      ],
      redirect: '/about/contact'//默认展示的路由
    },
    {path: '*', redirect: '/'}//设置输入路由地址错误，跳转到主页

  ],
  mode: 'history',//删除地址栏中的/#/
  scrollBehavior: (to, from, savedPosition) => {
   // return {x:0, y:100}
   // return {
      //selector:".btn"//路由切换的时候，定位到第一次出现类名.btn的位置
   // }
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0, y:0}
    }
  }
})
