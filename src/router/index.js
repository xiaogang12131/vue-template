import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import VuexTest from 'components/test/vuexTest'
import Ele from 'views/ele' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: []
    },
    {
      path: '/vuexTest',
      name: 'VuexTest',
      component: VuexTest,
      meta: ['vuexTest'],
    },
    {
      path: '/ele',
      name: 'ELe',
      component:Ele,
      meta: ['ele'],
      children:[
        {
          path:'ele',
          component:Ele,
          meta: ['ele','ele'],
        }
      ]
    }
  ]
})
