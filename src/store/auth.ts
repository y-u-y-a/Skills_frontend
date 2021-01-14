import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { Auth } from '@/plugins/firebase'

export const state = () => ({
  login_user: null
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  resetState: (state) => (state.login_user = null),
  setLoginUser: (state, val) => (state.login_user = val),
  unsetLoginUser: (state) => (state.login_user = null)
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async signUp({ commit }, { email, password }) {
      let res = await Auth.createUserWithEmailAndPassword(email, password)
      commit('setLoginUser', res.user)
    },

    async signIn({ commit }, { email, password }) {
      commit('common/toggleLoading', true, { root: true })
      let res = await Auth.signInWithEmailAndPassword(email, password)
      commit('setLoginUser', res.user)
      setTimeout(() => {
        commit('common/toggleLoading', false, { root: true })
        this.$router.push('/')
      }, 1000)
    },

    async signOut({ commit, dispatch }) {
      await Auth.signOut()
      dispatch('resetState', null, { root: true })
      this.$router.push('/')
    }
  }
)
