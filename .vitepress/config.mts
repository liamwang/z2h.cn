import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Z2H = Zero to Hero",
  description: "Everyone can go from zero to hero.",
  head: [
    [
      "script",
      {
        defer: "",
        src: "https://umm.z2h.cn/script.js",
        "data-website-id": "22e4eaf3-09bd-46cc-9206-abda3d576e8b",
      },
    ],
    // [
    //   'script',
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'G-F7ZTBJZFM6');`
    // ]
  ],
  themeConfig: {
    siteTitle: "Z2H",
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [{ icon: "github", link: "https://github.com/liamwang" }],

    footer: {
      // message: ``,
      copyright: `版权所有 © 2023-${new Date().getFullYear()}  Z2H.CN <br/> <a href="https://beian.miit.gov.cn/">沪ICP备15020427号-7</a>`,
    },
  },
});
