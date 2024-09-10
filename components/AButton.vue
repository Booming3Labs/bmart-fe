<script setup>
const props = defineProps(['text', 'background', 'notAllowed']);
console.log(props);
</script>
<template>
  <button :style="{background: background ? background : '#5D104B', cursor: notAllowed ? 'not-allowed' : 'pointer'}">{{ text }}</button>
</template>
<style lang="scss" scoped>
button {
  width: 129px;
  height: 44px;
  border-radius: 22px;
  background: #5D104B;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>