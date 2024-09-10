<script setup>
const props = defineProps(['name']);
</script>
<template>
  <div class="breadcrumb">
    <NuxtLink to="/">首页</NuxtLink>
    <span style="margin: 0 6px;">&gt;</span>
    <span>{{ name }}</span>
  </div>
</template>
<style lang="scss" scoped>
.breadcrumb {
  a {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #000000;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
  }
}
</style>