<script setup>

onMounted(async () => {
await import('pita-css/js')
});

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