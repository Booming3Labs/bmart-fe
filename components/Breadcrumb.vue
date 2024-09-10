<script setup>
const props = defineProps(['list']);
</script>
<template>
  <div class="breadcrumb">
    <NuxtLink to="/">首页</NuxtLink>
    <div v-for="(item, index) in list" :key="index">
      <span style="margin: 0 6px;">&gt;</span>
      <NuxtLink v-if="item.path" :to="item.path">{{ item.name }}</NuxtLink>
      <span v-else>{{ item.name }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.breadcrumb {
  display: flex;
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