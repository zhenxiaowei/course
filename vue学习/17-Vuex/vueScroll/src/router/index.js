import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import demo1 from '@/components/demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    }
  ]
})
