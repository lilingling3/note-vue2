import * as func from '../function'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = func.local.get() || {
  event:[],
  count:0
}

export default {
  state,
  getters,
  actions,
  mutations
}