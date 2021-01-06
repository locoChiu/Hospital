// 路由模块 通过前端跳转页面

import Vue from 'vue'
import Router from 'vue-router'

//引入所有组件
import Login from '@/components/Login'
import Index from '@/components/Home'
import DailiRecive from '@/components/DailiRecive'
import UserRecive from '@/components/UserRecive'
import Daili from '@/components/Daili'
import QianYue from '@/components/QianYue'
import Recive from '@/components/Recive'
import oneAgent from '@/components/oneAgent'
import twoAgent from '@/components/twoAgent'
import MyBd from '@/components/myBd'
import Bd from '@/components/baodan'
import Person from '@/components/Person'


Vue.use(Router)
const router =  new Router({
  routes: [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
   path:'/home',
   name:'Home',
   component:Index,
   meta: {
    requireAuth: true
  }
  },
  {
    path:'/dailiRecive',
    name:'dailiRecive',
    component:DailiRecive,
    meta: {
      requireAuth: true
    }
  },
  {
    path:'/userRecive',
    name:'userRecive',
    component:UserRecive,
    meta: {
      requireAuth: true
    }
  },
  {
    path:'/myDaili',
    name:'myDaili',
    component:Daili,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/myRecive',
    name:'myRecive',
    component:Recive,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/myQianYue',
    name:'myQianYue',
    component:QianYue,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/oneAgent',
    name:'oneAgent',
    component:oneAgent,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/twoAgent',
    name:'twoAgent',
    component:twoAgent,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/myBd',
    name:'myBd',
    component:MyBd,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/Bd',
    name:'Bd',
    component:Bd,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/person',
    name:'person',
    component:Person,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'*',
    component:Login
  }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token      
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {    
    next();    
  }
});

export default router
