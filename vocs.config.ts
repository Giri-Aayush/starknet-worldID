import { defineConfig } from 'vocs'

export default defineConfig({
  banner:{
    dismissable:true,
    backgroundColor:'black',
    textColor:'white',
    height: '30px',
    content: '🚧 Docs are a work in progress. Thanks for your patience as we improve them!',
  },
  aiCta: {  
    query({ location }) { 
      return `Please research and analyze this page: ${location} so I can ask you questions about it.`
    } 
  },
  title: 'Docs',
  sidebar: [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/overview' },
        { text: 'Why It Matters', link: '/why-it-matters' },
        { text: 'Getting Started', link: '/getting-started' },
      ]
    },
    {
      text: 'Guides',
      items: [
        { text: 'Pre Requisites', link: '/prerequisites' },
        { text: 'Bridge Setup', link: '/setup' },
        { text: 'Verification', link: '/verification' },
      ]
    },
  ],
})

