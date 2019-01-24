import Vue from 'vue'
import Router from 'vue-router'
import RandomGif from '@/components/RandomGif'
import TrendingGif from '@/components/TrendingGif'
//import RandomSticker from '@/components/RandomSticker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RandomGif',
      component: RandomGif
    },
    {
      path: '/trending',
      name: 'TrendingGif',
      component: TrendingGif
    }/*,
    {
      path: '/sticker',
      name: 'RandomSticker',
      component: RandomSticker
    }*/
  ]
})
