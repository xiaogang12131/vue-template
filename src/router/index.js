import Vue from 'vue'
import Router from 'vue-router'
import VuexTest from 'views/vuexTest/vuexTest'
import EleTest from 'views/eleTest' 

import home from 'views/home/home'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { title:'首页',tags:[] },
      // children: [
      //   {
      //     path: '/table',
      //     component: home
      //   }
      // ]
    },
    // {
    //   path: '/vuexTest',
    //   name: 'VuexTest',
    //   component: VuexTest,
    //   meta: {
    //     title:'vuex传值',
    //     tags:['vuexTest']
    //   }
    // },
    // {
    //   path: '/eleTest',
    //   name: 'ELe',
    //   component:EleTest,
    //   meta: {
    //     title:'页面',
    //     tags:['ele']
    //   },
    //   children:[
    //     {
    //       path:'/eleTest',
    //       component:EleTest,
    //       meta: {
    //         title:'页面',
    //         tags:['ele','ele']
    //       },
    //     }
    //   ]
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router