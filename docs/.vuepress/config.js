module.exports = {
  title: "若谷的博客 | Halo.X Blog",
  description: "种一棵树最好的时间是在十年前，其次是现在",
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: 'https://avatars0.githubusercontent.com/u/30809948?s=460&v=4' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://avatars0.githubusercontent.com/u/30809948?s=460&v=4' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  base: "/",// 部署到github相关的配置
  dest: "./dist",
  serviceWorker: true, // 是否开启 PWA
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/xsphalo" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide'),
      '/projects/': genSidebarConfigtwo('Projects')
    },
    lastUpdated: 'Last Updated',
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2
  },

  markdown: {
    // options for markdown-it-anchor
    lineNumbers: true, // 代码块是否显示行号
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}
function genSidebarConfigtwo (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        ['old', 'oldPage'],
      ['new', 'newPage']
      ]
    }
  ]
}

