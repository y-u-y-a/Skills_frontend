// import { axiosAuth, axiosToken } from '@plugins/firebase';

// export const state = () => ({
//   login_user: 'u',
//   id_token: null,
// });

// export const mutations = {
//   setIdToken(state, val) {
//     state.id_token = val;
//   }
// }

// export const actions = {
//   // ブラウザを閉じてもログイン状態を保持するため
//   checkLogin({ dispatch }) {
//     console.log('発火');
//     const id_token = localStorage.getItem('idToken');
//     const refresh_token = localStorage.getItem('refreshToken');
//     const expired_time = localStorage.getItem('idTokenExpiredTime');
//     // 有効期限切れの場合
//     if (expired_time) {
//       dispatch('updateToken', refresh_token);
//     }
//     else dispatch('autoUpdateToken', refresh_token);
//   },

//   async signUp({ dispatch }, params) {
//     const url = `/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
//     await axiosAuth
//       .post(url, {
//         email: params.email,
//         password: params.password,
//         returnSecureToken: true,
//       })
//       .then((res) => {
//         dispatch('setAuthData', {
//           id_token: res.data.idToken,
//           refresh_token: res.data.refreshToken,
//         });
//       });
//   },

//   async signIn({ dispatch }, params) {
//     const url = `/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
//     await axiosAuth
//       .post(url, {
//         email: params.email,
//         password: params.password,
//         returnSecureToken: true,
//       })
//       .then((res) => {
//         dispatch('setAuthData', {
//           id_token: res.data.idToken,
//           refresh_token: res.data.refreshToken,
//         });
//       });
//   },
//   // refresh_tokenを用いてid_tokenを自動更新する処理
//   async updateToken({ dispatch }, refresh_token) {
//     let url = `/token?key=${process.env.FIREBASE_API_KEY}`;
//     let res = await axiosToken.post(url, {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token,
//     });
//     dispatch('setAuthData', {
//       id_token: res.data.id_token,
//       refresh_token: res.data.refresh_token
//     });
//   },
//   // ローカルストレージにトークンを保存(永続化)・トークンの自動更新処理実行
//   setAuthData({ commit, dispatch }, { id_token, refresh_token }) {
//     console.log(id_token);
//     // 有効期限
//     const now = new Date();
//     const expired_time = now.getTime() + 2000;
//     localStorage.setItem('idTokenExpiredTime', expired_time);
//     localStorage.setItem('idToken', id_token);
//     localStorage.setItem('refreshToken', refresh_token);
//     commit('setIdToken', id_token);
//     dispatch('autoUpdateToken', refresh_token);
//   },
//   // ローカルストレージを自動更新する処理
//   autoUpdateToken({ dispatch }, refresh_token) {
//     let intval = 2000;
//     setTimeout( () => {
//       dispatch('updateToken', refresh_token);
//     }, intval);
//   },
// }
