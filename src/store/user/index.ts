import { getAccessorType } from 'typed-vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { UserState } from '@/types'

const state: UserState = {
  email: '',
  password: '',
  name: '',
  //
  lastName: '',
  firstName: '',
  lastNameKana: '',
  firstNameKana: '',
  //
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  //
  gender: 0,
  phone_number: '',
  station: '',
  profile: '',
}

export default getAccessorType({
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
})
