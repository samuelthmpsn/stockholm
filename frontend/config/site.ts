export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Stockholm",
    description: "Making music matter",
    mainNav: [
        {
            title: "dashboard",
            href: "/dashboard",
        },
        {
            title: "spotify",
            href: "/spotify",
        },
        {
            title: "playground",
            href: "/playground",
        },
        {
            title: "settings",
            href: "/settings",
        }
    ],
    links: {
        github: "https://github.com/samuelthmpsn/stockholm",
    },
}
