// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-seo-utils',
    '@nuxt/scripts',
    'nuxt-site-config',
    '@nuxt/content',
    "@nuxthub/core",
    '@nuxtjs/robots',
  ],

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-06-10',

  css: [
    "pita-css/style",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  nitro: {
    preset: 'cloudflare_pages',
  },

  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-3ZKKED8546',
      },
    }
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    },
    preview: {
      api: 'https://api.nuxt.studio'
    },
    build: {
      markdown: {
        highlight: {
          // OR
          theme: {
            // Default theme (same as single string)
            default: 'github-dark',
            // Theme used if `html.dark`
            dark: 'github-light',
          }
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        }
      }
    }
  },

  hub: {
    database: true
  },

  sitemap: {
    xsl: false,
  },

  site: {
    url: "https://css.pitahex.com",
    name: "PitaCSSマニュアル",
  }
})