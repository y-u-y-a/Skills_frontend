import { Context } from '@nuxt/types'
import { Auth } from '@/plugins/firebase'

// ###############################
// middleware: リクエストごとに発火
// ###############################

export default ({ store, route, redirect }: Context) => {
  console.log('middleware')
  //
  Auth.onAuthStateChanged((user) => {
    console.log('ログインユーザー:', user)
    //
    if (user) {
      store.commit('auth/setLoginUser', user)
    } else {
      store.commit('auth/setLoginUser', null)
      const path_list = ['/', '/auth/Login', '/auth/Register']
      if (!path_list.includes(route.path)) redirect('/auth/Login')
    }
  })
}
