import { MutationTree } from 'vuex'

import { CommonState } from '@/types'

const state: CommonState = {
  isPreview: false,
  isSidebar: false,
  loading: false,
}

const mutations: MutationTree<CommonState> = {
  //
  resetState: (state) => {
    state.isPreview = false
    state.isSidebar = false
    state.loading = false
  },
  //
  togglePreview: (state) => {
    console.log(state)
    state.isPreview = !state.isPreview
  },
  //
  toggleSidebar: (state) => {
    state.isSidebar = !state.isSidebar
  },
  //
  toggleLoading: (state) => {
    state.loading = !state.loading
  },
}

export default {
  namespaced: true,
  state: () => state,
  mutations,
}
