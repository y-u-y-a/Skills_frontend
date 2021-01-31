import { MutationTree } from 'vuex'
import { ProjectState } from '@/types'

const mutations: MutationTree<ProjectState> = {
  // About
  setTitle: (state, val) => (state.title = val),
  setPosition: (state, val) => (state.position = val),
  setMemberCounts: (state, val) => (state.memberCounts = val),
  setIndustryType: (state, val) => (state.industryType = val),
  // Period
  setPeriod(state, { start = null, end = null }) {
    if (start) state.startAt = start
    if (end) state.endAt = end
  },
  // Work
  setProcess: (state, vals) => (state.process = vals),
  setDetail: (state, val) => (state.detail = val),
  // Develop
  setOS: (state, val) => state.os.push(val),
  setDB: (state, val) => state.db.push(val),
  setLang: (state, val) => state.lang.push(val),
  setFW: (state, val) => state.fw.push(val),
  setTool: (state, val) => state.tool.push(val),

  unsetOS: (state, val) => {
    let i = state.os.indexOf(val)
    if (i > -1) state.os.splice(i, 1)
  },
  unsetDB: (state, val) => {
    let i = state.db.indexOf(val)
    if (i > -1) state.db.splice(i, 1)
  },
  unsetLang: (state, val) => {
    let i = state.lang.indexOf(val)
    if (i > -1) state.lang.splice(i, 1)
  },
  unsetFW: (state, val) => {
    let i = state.fw.indexOf(val)
    if (i > -1) state.fw.splice(i, 1)
  },
  unsetTool: (state, val) => {
    let i = state.tool.indexOf(val)
    if (i > -1) state.tool.splice(i, 1)
  },
}

export default mutations
