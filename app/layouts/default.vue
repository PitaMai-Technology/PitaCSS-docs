<template>
    <TheAppHeader />
    <div class="container">
        <TheAppAside />
        <div class="content">

            <!-- メインコンテンツエリア -->
            <main class="pT40">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>

// const isMenuOpen = ref(false)

// const toggleMenu = () => {
//     isMenuOpen.value = !isMenuOpen.value
// }

// const closeMenu = () => {
//     isMenuOpen.value = false
// }

</script>

<style>
button {
    color: var(--white);
}
</style>