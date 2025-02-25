import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/network/',
  link: '/network/',
  sidebar: [
    {text: '配置模板', prefix: 'template', collapsed: true, items: 'auto', },
    { text: '网络协议', prefix: 'protocol', collapsed: true, items: 'auto', },
  ],
})
