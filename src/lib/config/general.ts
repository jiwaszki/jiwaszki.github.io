import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
    {
        name: 'light',
        text: '☀️ Light'
    },
    {
        name: 'dark',
        text: '🌙 Dark'
    },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
        text: 'about me',
        link: '/about-me'
    },
    {
      text: 'projects',
      link: '/projects'
    },
    {
        text: 'blog',
        // link: '/blog'
        // sub-sections for blog topics
        children: [
            {
              text: '💭 general',
              link: '/sections/general'
            },
            {
                text: '🐍 python',
                link: '/sections/python'
            },
            {
                text: '💻 ai & ml',
                link: '/sections/ai-ml'
            },
            {
                text: '📚 math',
                link: '/sections/math'
            },
            // {
            //   text: 'section name',
            //   link: '/folder/file'
            // },
          ]    
    },
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
