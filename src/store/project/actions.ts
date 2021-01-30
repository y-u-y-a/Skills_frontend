import { ActionTree } from 'vuex'
import { ProjectState, RootState } from '@/types'

const actions: ActionTree<ProjectState, RootState> = {
  insertProject({ commit }, { data }) {
    console.log(data)
  },
}
export default actions
