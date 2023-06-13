<template>
  <svg :style="getStyle">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  const props = defineProps({
    size: {
      type: Number,
      default: 16
    },
    prefix: {
      type: String,
      default: '#icon-'
    },
    name: String,
    color: String
  })
  const getStyle = computed(() => {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`
    }
  })
</script>

<style scoped></style>
