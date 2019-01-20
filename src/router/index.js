import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import RandomGif from '../components/Random/RandomGif'
import TrendingGif from '../components/Trending/TrendingGif'
import RandomSticker from '../components/Sticker/RandomSticker'
import Main from "../components/Main";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: 'Home', component: Home},
    { path: '/menu', name: 'Main', component: Main,
      children: [
        { path: '/random', name: 'RandomGif', component: RandomGif },
        { path: '/trending', name: 'TrendingGif', component: TrendingGif },
        { path: '/sticker', name: 'RandomSticker', component: RandomSticker }
      ]
    }
  ]
})
