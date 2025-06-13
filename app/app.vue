<script setup>
onMounted(async () => {
  await import('pita-css/js')

  // PitaCSSのテーマとshikiテーマを同期
  const syncShikiTheme = () => {
    const htmlElement = document.documentElement
    const currentTheme = htmlElement.getAttribute('data-theme')
    
    // システム設定を考慮してテーマを判定
    let isDark = false
    
    if (currentTheme === 'dark') {
      isDark = true
    } else if (currentTheme === 'light') {
      isDark = false
    } else {
      // data-theme属性がない場合はシステム設定を確認
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    
    // より確実にクラスを操作
    if (isDark) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }

    // GitHubテーマの切り替え
    switchGitHubTheme(isDark)
  }

  // GitHubテーマの切り替え関数
  const switchGitHubTheme = (isDark) => {
    // すべてのpre要素内のgithub-lightテーマをgithub-darkに変更（またはその逆）
    const preElements = document.querySelectorAll('pre')
    
    preElements.forEach(pre => {
      if (isDark) {
        // ライトモードからダークモードへ
        if (pre.classList.contains('github-light')) {
          pre.classList.remove('github-light')
          pre.classList.add('github-dark')
        }
        // data-theme属性での制御
        if (pre.getAttribute('data-theme') === 'github-light') {
          pre.setAttribute('data-theme', 'github-dark')
        }
      } else {
        // ダークモードからライトモードへ
        if (pre.classList.contains('github-dark')) {
          pre.classList.remove('github-dark')
          pre.classList.add('github-light')
        }
        // data-theme属性での制御
        if (pre.getAttribute('data-theme') === 'github-dark') {
          pre.setAttribute('data-theme', 'github-light')
        }
      }
    })

    // シンタックスハイライト用のspanやcode要素も対象に
    const codeElements = document.querySelectorAll('code[class*="github-"], .shiki')
    codeElements.forEach(code => {
      if (isDark) {
        code.className = code.className.replace(/github-light/g, 'github-dark')
      } else {
        code.className = code.className.replace(/github-dark/g, 'github-light')
      }
    })
  }

  // 初期同期を少し遅らせる
  setTimeout(syncShikiTheme, 100)

  // テーマ変更を監視
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        setTimeout(syncShikiTheme, 50) // 少し遅延を追加
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })

  // DOM変更を監視してページ遷移後のシンタックスハイライトを検出
  const contentObserver = new MutationObserver((mutations) => {
    let shouldSync = false
    
    mutations.forEach((mutation) => {
      // 新しいpre要素やcode要素が追加された場合
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as Element
            if (element.tagName === 'PRE' || 
                element.tagName === 'CODE' || 
                element.querySelector('pre, code, .shiki')) {
              shouldSync = true
            }
          }
        })
      }
    })
    
    if (shouldSync) {
      setTimeout(syncShikiTheme, 100)
    }
  })

  // main要素またはbody全体を監視
  const targetElement = document.querySelector('main') || document.body
  contentObserver.observe(targetElement, {
    childList: true,
    subtree: true
  })

  // カスタムイベントも監視
  window.addEventListener('themechange', () => {
    setTimeout(syncShikiTheme, 50)
  })

  // システムのカラースキーム変更も監視
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    setTimeout(syncShikiTheme, 50)
  })

  // Nuxtのページ遷移を監視
  const router = useRouter()
  router.afterEach(() => {
    setTimeout(syncShikiTheme, 200) // ページ遷移後に少し遅延を持ってテーマを同期
  })
})

useHead({
    link: [
        { rel: "icon", href: "/favicon.png" },
    ],
    htmlAttrs: {
        lang: 'ja'
    },
})
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
#progress {
    height: 4px;
    z-index: 1000;
    width: 100%;
}

/* より強力なセレクタで確実に適用 */
html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
}

/* GitHubテーマ用の追加スタイル */
.github-dark {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
}

.github-light {
  background-color: #ffffff !important;
  color: #24292f !important;
}
</style>