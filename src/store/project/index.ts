import { getAccessorType } from 'typed-vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { ProjectState } from '@/types'

const state: ProjectState = {
  // About
  title: null,
  position: null,
  memberCounts: null,
  industryType: null,
  // Work
  process: [],
  detail: null,
  // Period
  startAt: null,
  endAt: null,
  // Develop
  os: ['Mac', 'windows', 'Linux', 'Ubuntu', 'CentOS7'],
  db: ['MySQL', 'PostgresQL', 'NoSQL', 'oracle'],
  lang: ['Python', 'JavaScript', 'Go'],
  fw: ['Vue.js', 'Laravel', 'Django', 'Docker'],
  tool: ['Slack', 'ChatWork', 'Asana'],
}

export default getAccessorType({
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
})
