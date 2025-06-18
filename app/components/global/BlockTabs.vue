<template>
  <div class="tabs">
    <div class="tabs-nav">
      <button v-for="(tab, index) in tabs" :key="index" class="tab-button" :class="{ active: activeTab === index }"
        :aria-selected="activeTab === index" @click="setActiveTab(index)">
        {{ tab.title }}
      </button>
    </div>
    <div class="tabs-content">
      <div v-for="(tab, index) in tabs" :key="index" class="tab-panel" :class="{ active: activeTab === index }"
        :aria-hidden="activeTab !== index">
        <slot :name="`tab-${index}`" :tab="tab">
          <h3>{{ tab.title }}</h3>
          <p>{{ tab.content }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    default: () => [
      { title: 'タブ1 編集しよう！', content: '編集しよう！' }
    ]
  },
  defaultTab: {
    type: Number,
    default: 0
  }
})

const activeTab = ref(props.defaultTab)

const setActiveTab = (index) => {
  activeTab.value = index
}
</script>