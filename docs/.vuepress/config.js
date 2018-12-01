module.exports = {
  title: '若谷的博客',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: 'https://avatars0.githubusercontent.com/u/30809948?s=460&v=4' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://avatars0.githubusercontent.com/u/30809948?s=460&v=4' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  // port: '8080',
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '技术人生', link: '/techlife/' },
      {text: '远方的我', link: '/myfuture/'}
    ],
    sidebar:{
      '/techlife/': [
          {
            title: '技术人生',
            children: [
              
            ]
          }
        ],
        '/myfuture/': [
          '/myfuture/', 
          {
            title: '远方的我',
            children: [
              
            ]
          }
        ]
    },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};