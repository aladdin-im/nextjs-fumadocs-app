export const siteConfig = {
    name: "NextJS FumaDocs App",
    domain: "nextjs-fumadocs-app.com",
    url: "https://nextjs-fumadocs-app.com",

    // 联系信息
    contact: {
        email: "contact@nextjs-fumadocs-app.com",
    },

    // 社交媒体
    social: {
        twitter: "https://twitter.com/nextjs-fumadocs-app",
        facebook: "https://facebook.com/nextjs-fumadocs-app",
    },
} as const;

export type SiteConfig = typeof siteConfig;