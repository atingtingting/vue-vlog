import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Reg from '@/components/registered'
import Home from '@/components/home'
import UserPage from '@/components/userPage'
import Setting from '@/components/setting'
import UserHome from '@/components/userHome'
import UserData from '@/components/userData'
import Editor from '@/components/editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: UserPage,
      children: [
        {
          path: 'userHome',
          name: 'userHome',
          component: UserHome
        },
        {
          path: 'setting',
          name: 'setting',
          component: Setting
        },
        {
          path: 'userData',
          name: 'userData',
          component: UserData
        }
      ]
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '',
      name: 'login',
      component: Login
    }
  ]
})
