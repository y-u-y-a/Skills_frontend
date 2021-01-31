import { ActionTree } from 'vuex'

import { Auth } from '@/plugins/firebase'
import { AuthState, RootState } from '@/types'

const actions: ActionTree<AuthState, RootState> = {
  //
  signUp: async ({ commit }, { email, password }) => {
    let res = await Auth.createUserWithEmailAndPassword(email, password)
    commit('setLoginUser', res.user)
  },
  //
  signIn: async ({ commit }, { email, password }) => {
    // commit('common/toggleLoading', true, { root: true })
    // let res = await Auth.signInWithEmailAndPassword(email, password)
    // commit('setLoginUser', res.user)
    // setTimeout(() => {
    //   commit('common/toggleLoading', false, { root: true })
    //   this.$router.push('/')
    // }, 1000)
  },
  //
  signOut: async ({ commit, dispatch }) => {
    // await Auth.signOut()
    // dispatch('resetState', null, { root: true })
    // this.$router.push('/')
  },
}

export default actions
