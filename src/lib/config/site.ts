import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'jiwaszki.github.io',
  title: 'jiwaszki',
  subtitle: "jiwaszki's blog",
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/profile_pic.png',
    name: 'Jan Iwaszkiewicz',
    status: '🦧',
    bio: "AI Frameworks Engineer, self-taught artist, basketball enjoyer, pug owner"
  },
  themeColor: '#F5EBD3'
}
