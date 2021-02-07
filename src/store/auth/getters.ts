import { GetterTree } from 'vuex'
import { AuthState, RootState } from '@/types'

const getters: GetterTree<AuthState, RootState> = {
  //
  loginUser: (state: AuthState) => {
    return state.loginUser
  },
}

export default getters
