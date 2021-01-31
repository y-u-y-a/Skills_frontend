import { MutationTree } from 'vuex'
import { AuthState, User } from '@/types'

const mutations: MutationTree<AuthState> = {
  //
  resetState: (state) => (state.loginUser = null),
  //
  setLoginUser: (state, user: User) => (state.loginUser = user),
  //
  unsetLoginUser: (state) => (state.loginUser = null),
}

export default mutations
