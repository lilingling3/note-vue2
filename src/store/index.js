// vuex 模块化
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import theme from './theme'

export default new Vuex.Store({
  modules:{
    theme
  }
})
