<script setup>
onMounted(async () => {
  await import('pita-css/js')

  // PitaCSSのテーマとshikiテーマを同期
  const syncShikiTheme = () => {
    const htmlElement = document.documentElement
    const currentTheme = htmlElement.getAttribute('data-theme')
    
    // より確実にクラスを操作
    if (currentTheme === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
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

  // カスタムイベントも監視
  window.addEventListener('themechange', () => {
    setTimeout(syncShikiTheme, 50)
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
</style>