// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-seo-utils',
    '@nuxt/scripts',
    'nuxt-site-config',
    '@nuxt/content',
    '@nuxtjs/robots',
    'nuxt-studio'
  ],

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-06-10',

  css: [
    "pita-css/style-base",
    "pita-css/style",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'PitaMai-Technology',
      repo: 'PitaCSS-docs',
      branch: 'main',
      private: false,
    },
    i18n: {
      defaultLocale: 'jp' // 'en', 'fr' or 'de'
    }
  },

  nitro: {
    preset: 'vercel',
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  },

  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-3ZKKED8546',
      },
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          // OR
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
          }
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        }
      }
    }
  },

  sitemap: {
    xsl: false,
  },

  site: {
    url: "https://css.pitahex.com",
    name: "PitaCSSマニュアル",
  }
})