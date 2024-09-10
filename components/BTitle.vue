<script setup>
const props = defineProps(['title']);

</script>
<template>
  <div class="title flex-center-start">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.title {
  h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 56px;
    color: #333333;
  }
}
</style>