import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import RandomGif from '@/components/RandomGif'
import TrendingGif from '@/components/TrendingGif'
import RandomSticker from '@/components/RandomSticker'
=======
import Home from '../components/Home'
import RandomGif from '../components/random/RandomGif'
import TrendingGif from '../components/trending/TrendingGif'
import RandomSticker from '../components/sticker/RandomSticker'
>>>>>>> c4faeaa5f203bbae3317007d5a45562b0517843e

Vue.use(Router);

export default new Router({
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'RandomGif',
      component: RandomGif
    },
    {
      path: '/trending',
      name: 'TrendingGif',
      component: TrendingGif
    },
    {
      path: '/sticker',
      name: 'RandomSticker',
      component: RandomSticker
    }
=======
    { path: "/", name: 'Home', component: Home},
        { path: '/random', name: 'RandomGif', component: RandomGif },
        { path: '/trending', name: 'TrendingGif', component: TrendingGif },
        { path: '/sticker', name: 'RandomSticker', component: RandomSticker }
>>>>>>> c4faeaa5f203bbae3317007d5a45562b0517843e
  ]
})
