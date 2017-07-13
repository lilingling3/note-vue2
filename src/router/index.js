import Vue from 'vue'
import Router from 'vue-router'
import  Mint from '@/components/mint-ui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mint',
      name: 'mint',
      component: Mint
    }
  ]
})
