import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import RandomGif from '../components/random/RandomGif'
import TrendingGif from '../components/trending/TrendingGif'
import RandomSticker from '../components/sticker/RandomSticker'

Vue.use(Router);

export default new Router({
  /*mode: 'history',*/
  routes: [
    { path: "/", name: 'Home', component: Home},
    { path: '/random', name: 'RandomGif', component: RandomGif },
    { path: '/trending', name: 'TrendingGif', component: TrendingGif },
    { path: '/sticker', name: 'RandomSticker', component: RandomSticker }
  ]
})
