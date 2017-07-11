import * as func from '../function'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = func.theme_local.get() || {
  theme: 'blue'
}

export default {
  state,
  actions,
  mutations,
  getters
}