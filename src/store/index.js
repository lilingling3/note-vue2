// vuex 模块化
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import theme from './theme'
import event from './event'

export default new Vuex.Store({
  modules:{
    theme,
    event
  }
})
