import dotenv from 'dotenv'

dotenv.config()
//
const head = {
  title: 'skills',
  htmlAttrs: { lang: 'ja' },
  meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}
//
export default {
  ssr: false,
  env: { ...process.env }, // objectのスプレッド構文
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  head: head,
  srcDir: 'src/',
  generate: {
    dir: 'public',
  },
  css: ['@/assets/sass/app.scss'],

  plugins: ['~/plugins/environments'],

  components: true,

  buildModules: ['@nuxtjs/style-resources', '@nuxt/typescript-build', 'nuxt-typed-vuex'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/axios', 'nuxt-fontawesome'],
  // PWA
  pwa: {
    icon: {
      source: '@/static/icon.png',
    },
    manifest: {
      name: 'Skills',
      lang: 'ja',
    },
    // workbox: {
    //   dev: true, //開発環境でもPWA
    // },
  },
  // Sass
  styleResources: {
    scss: ['@/assets/sass/foundation/vars.scss', '@/assets/sass/foundation/mixin.scss'],
  },
  // FontAwesome
  fontawesome: {
    component: 'Icon',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  //  Alias
  build: {
    // for vuex
    transpile: [/typed-vuex/],
    extend(config: any, ctx: any) {
      config.resolve.alias['@plugins'] = '~/plugins'
      config.resolve.alias['@pages'] = '~/pages'
    },
  },
  // 404
  router: {
    extendRoutes(routes: any, resolve: any) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/error/404.vue'),
      })
    },
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
}
