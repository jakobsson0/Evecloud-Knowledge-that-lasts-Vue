import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Mobile from './views/mobile'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Mobile',
      path: '/',
      component: Mobile,
    },
  ],
})
