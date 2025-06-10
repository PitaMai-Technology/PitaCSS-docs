<script setup>

onMounted(async () => {
await import('pita-css/js')

// PitaCSSのテーマとshikiテーマを同期
const syncShikiTheme = () => {
  const htmlElement = document.documentElement
  const currentTheme = htmlElement.getAttribute('data-theme')
  
  if (currentTheme === 'dark') {
    htmlElement.classList.add('dark')
  } else {
    htmlElement.classList.remove('dark')
  }
}

// 初期同期
syncShikiTheme()

// テーマ変更を監視
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
      syncShikiTheme()
    }
  })
})

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme']
})

// カスタムイベントも監視（PitaCSSがイベントを発火する場合）
window.addEventListener('themechange', syncShikiTheme)
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
</style>