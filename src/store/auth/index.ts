import { getAccessorType } from 'typed-vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { AuthState } from '@/types'

const state: AuthState = {
  loginUser: null,
}

export default getAccessorType({
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
})
