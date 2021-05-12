import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/airtime',
      name: 'Airtime',
      component: () => import('../views/services/Airtime_page.vue')
      },
      {
        path: '/success',
        name: 'Success',
        component: () => import('../views/services/SuccessPage.vue')
        }
  ]
})
