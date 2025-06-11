<template>
    <header class="headerContainer">
        <div class="logoContainer hide-max1250">
            <NuxtLink to="/" class="inherit-link">
                PitaCSS(α)
            </NuxtLink>
        </div>
        <div class="logoContainerSp hide-min1250">
            <NuxtLink to="/" class="inherit-link">
                PitaCSS(α)
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
</script>

<style>
.headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray-primary);
    box-shadow: var(--shadow-lg);
    position: sticky;
    top: 0;
    z-index: 1000;
    height: 72px;
    padding: 0 40px;

    @media screen and (max-width: 1250px) {
        padding: 0 20px;
        justify-content: flex-end;
    }
}

.logoContainer {
    display: flex;
    align-items: center;
    max-width: 300px;
    font-size: var(--text-xl);
    font-weight: bold;
}

.logoContainerSp{
    display: flex;
    align-items: center;
    max-width: 180px;
    font-size: var(--text-xl);
    font-weight: bold;
}

.logoText {
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