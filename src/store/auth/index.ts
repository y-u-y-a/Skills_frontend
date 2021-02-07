import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { AuthState } from '@/types'

const state: AuthState = {
  loginUser: null,
}

export default {
  namespaced: true,
  state: () => state,
  getters,
  actions,
  mutations,
}
