
export default {
  mode: 'universal',
  server: {
    port: 3012 // default: 3000
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '中介游-安全的游戏账号交易平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '中介游（http://www.zhongjieyou.com/）安全的游戏账号交易平台：提供有性价比的游戏账号,帐号交易,账号交易平台,手游交易,手游交易平台,手游交易网,手机游戏交易,手机游戏交易平台,首充号交易,首充号交易平台,手机游戏首充号交易,游戏账号交易平台,首充号,金币,装备,道具,手游代充,自媒体,新媒体帐号等服务,自由买卖,担保寄售交易,安全便捷,中介游交易平台。' },
      { hid: 'keywords', name: 'keywords', content: '游戏交易平台,中介游,中介游交易平台,中介游官网,中介游手游交易平台,账号交易,账号交易平台,手游交易,手游交易平台,手游交易网,手机游戏交易,手机游戏交易平台,首充号交易,首充号交易平台,手机游戏首充号交易,游戏账号交易平台,中介游戏交易平台，游戏中介，帐号中介，手游中介，交易平台' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }]
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    middleware: ['check-auth']
  }
}
