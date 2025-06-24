<script setup>
import Fuse from 'fuse.js'

const query = ref('')
const { data } = await useAsyncData('search-data', () => queryCollectionSearchSections('content'))

const fuse = new Fuse(data.value ?? [], {
    keys: ['title', 'description']
})

const result = computed(() => fuse.search(toValue(query)).slice(0, 10))


useSeoMeta({
    ogImage: "https://org.pitahex.com/ogp.png",
})
</script>

<template>
    <div class="search-container">
        <div class="mB20">
            <form class="wMax768 search-box">
                <input type="search" v-model="query" id="search-input" name="search" placeholder="キーワードを入力してください..." />
            </form>
        </div>
        <div class="search-card">
            <h2>検索結果</h2>
            <ul class="search-list">
                <li v-for="link of result" :key="link.item.id" class="search-list-item">
                    <NuxtLink :to="link.item.id" class="search-link w100">
                        <span class="search-title">{{ link.item.title }}</span>
                        <span class="search-snippet fontSize13px">
                            {{ link.item.content?.slice(0, 100) }}...
                        </span>
                    </NuxtLink>
                </li>
            </ul>
            <div v-if="query && result.length === 0" class="search-empty grayColor300 fontSize15px">
                <font-awesome-icon icon="fa-solid fa-circle-xmark" /> 該当する結果がありません <font-awesome-icon
                    icon="fa-solid fa-circle-xmark" />
            </div>
            <div v-if="!query" class="search-empty grayColor300 fontSize15px">
                キーワードを入力してください
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-container {
    max-width: 600px;
    margin: 32px auto;
}

.searchButton:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.search-card {
    background: var(--gray-primary);
    border-radius: 12px;
    box-shadow: var(--shadow-md);
    padding: 24px;
}

.search-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.search-list-item {
    margin-top: 12px;
}

.search-link {
    display: block;
    width: 100%;
    padding: 12px 10px;
    border-radius: 8px;
    background: var(--gray-tertiary);
    color: var(--text-primary);
    text-decoration: none;
    transition: background 0.2s;
}

.search-link:hover {
    background: var(--brand-secondary);
    color: var(--white);
    text-decoration: none;
}

.search-title {
    font-weight: bold;
    font-size: var(--text-base);
}

.search-snippet {
    display: block;
    font-size: var(--text-xs);
    margin-top: 4px;
}
</style>
