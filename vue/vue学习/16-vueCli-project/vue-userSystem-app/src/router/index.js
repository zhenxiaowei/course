import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetails from '@/components/CustomerDetails'
import Edit from '@/components/Edit'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'CustomerDetails',
      component: CustomerDetails
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }

  ],
  mode:"history"
})
