<template>
  <div :class="`alert ${type}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'info' | 'success' | 'warning' | 'error'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info'
})
</script>