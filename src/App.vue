<script setup lang="ts">
  import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <div class="text">刘莎大笨猪</div>
    <el-row>
      <el-button :icon="Search" />
      <el-button type="primary" :icon="Edit" />
      <el-button type="success" :icon="Check" />
      <el-button type="info" :icon="Message" />
      <el-button type="warning" :icon="Star" />
      <el-button type="danger" :icon="Delete" />
    </el-row>
    <svg-icon name="home" size="30"></svg-icon>
  </div>
</template>

<style scoped lang="scss">
  .text {
    color: $base-color;
  }
</style>
