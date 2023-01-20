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
    bio: "AI Frameworks Engineer, self-taught artist, basketball enjoyer, pug owner",
    metadata: [
        {
            // text: "github jiwaszki",
            icon: "i-simple-icons-github",
            link: "https://github.com/jiwaszki",
        },
        {
            // text: "linkedin jiwaszki",
            icon: "i-simple-icons-linkedin",
            link: "https://www.linkedin.com/in/jan-iwaszkiewicz-80442a1a5",
        },
        {
            // text: "instagram jiwaszki",
            icon: "i-simple-icons-instagram",
            link: "https://www.instagram.com/illumitata/",
        },
    ],
  },
  themeColor: '#F5EBD3'
}
