<template>
  <div class="logo">
    <img src="@/assets/icons/vite.svg" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>
<script setup lang="ts">
  import setting from '@/setting'
</script>

<style lang="scss" scoped>
  .logo {
    width: 100%;
    height: $base-menu-logo-height;
    display: flex;
    padding: 10px;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    p {
      font-size: $base-logo-title-fontSize;
      font-weight: 600;
      color: white;
      padding-left: 8px;
    }
  }
</style>
