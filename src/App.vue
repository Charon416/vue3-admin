<script setup lang="ts">
  import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-row>
      <el-button :icon="Search" />
      <el-button type="primary" :icon="Edit" />
      <el-button type="success" :icon="Check" />
      <el-button type="info" :icon="Message" />
      <el-button type="warning" :icon="Star" />
      <el-button type="danger" :icon="Delete" />
    </el-row>
  </div>
</template>

<style scoped lang="scss"></style>
