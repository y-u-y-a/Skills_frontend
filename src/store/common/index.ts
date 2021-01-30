import { MutationTree } from 'vuex'
import { getAccessorType } from 'typed-vuex'

export const strict = false

type CommonState = {
  isPreview: boolean
  isSidebar: boolean
  loading: boolean
}

const state: CommonState = {
  isPreview: false,
  isSidebar: false,
  loading: false,
}

const mutations: MutationTree<CommonState> = {
  resetState: (state) => {
    state.isPreview = false
    state.isSidebar = false
    state.loading = false
  },
  togglePage: (state, page_name) => {
    if (page_name == 'preview') state.isPreview = !state.isPreview
    if (page_name == 'sidebar') state.isSidebar = !state.isSidebar
  },
  toggleLoading: (state) => {
    state.loading = !state.loading
  },
}

export default getAccessorType({
  namespaced: true,
  state,
  mutations,
})
