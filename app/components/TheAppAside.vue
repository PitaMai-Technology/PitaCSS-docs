<script setup>
// queryCollectionNavigationを使用してナビゲーション構造を取得
const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('content')
})
</script>

<template>
    <div>
        <button class="nav-toggle">☰</button>

        <!-- オーバーレイ（モバイル用） -->
        <div class="nav-overlay"></div>

        <!-- アサイドナビゲーション -->
        <aside>
            <!-- ナビヘッダー -->
            <div class="aside-header">
                MIT License<br>
                <select data-theme-select class="mT20">
                    <option value="auto">💻 システム設定</option>
                    <option value="light">☀️ ライト</option>
                    <option value="dark">🌙 ダーク</option>
                </select>
            </div>

            <!-- メニューリスト -->
            <ul v-if="data">
                <li>
                    <NuxtLink to="/">ホーム</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/search">検索</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://pita-css-preview.pitahex.com/" target="_blank">プレビュー <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://pitamai.com/" target="_blank">開発元 <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></NuxtLink>
                </li>
                <li v-for="item in data" :key="item.path">
                    <NuxtLink :to="item.children && item.children.length > 0 ? '#' : item.path">{{ item.title }}</NuxtLink>
                    <!-- ネストされたメニュー -->
                    <ul v-if="item.children && item.children.length > 0">
                        <li v-for="child in item.children" :key="child.path">
                            <NuxtLink :to="child.path">{{ child.title }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </div>
</template>

<style></style>