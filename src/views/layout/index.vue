<template>
  <div class="layout">
    <div class="slider">
      <Logo></Logo>
    </div>
    <div class="tabbar"></div>
    <div class="main">
      <div>
        <h1 v-for="item in 1000" :key="item">{{ item }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100vh;
    background-color: skyblue;
    .slider {
      width: $base-menu-width;
      height: 100vh;
      background-color: $base-menu-background;
    }
    .tabbar {
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      background-color: yellow;
      position: absolute;
      top: 0;
      right: 0;
    }
    .main {
      position: absolute;
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height);
      background-color: green;
      top: $base-tabbar-height;
      right: 0;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
    }
  }
</style>
