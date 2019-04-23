import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    }
  ]
})
