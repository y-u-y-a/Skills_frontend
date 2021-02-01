// storeの厳格モード: https://ja.nuxtjs.org/docs/2.x/directory-structure/store/
export const strict = false

import { getAccessorType } from 'typed-vuex'
import common from '@/store/common'
import auth from '@/store/auth'
import user from '@/store/user'
import project from '@/store/project'

export default getAccessorType({
  modules: {
    common,
    auth,
    user,
    project,
  },
})
