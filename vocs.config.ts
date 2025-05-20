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
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
