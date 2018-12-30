import Vue from 'vue'
import Router from 'vue-router'
import RandomGif from '@/components/RandomGif'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Random gif',
      component: RandomGif
    }
  ]
})
