<template>
    <header>
        <div class="logo-container hide-max1250">
            <NuxtLink to="/" class="inherit-link logo-text">
                PitaCSS(beta)
            </NuxtLink>
        </div>
        <div class="logo-container-responsive hide-min1250">
            <NuxtLink to="/" class="inherit-link logo-text">
                PitaCSS(beta)
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
</script>

<style scoped>

.logo-text {
    font-size: var(--text-lg);
    font-weight: 700;
    margin: 0;
    padding: 0;
}

.headerRight {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
</style>