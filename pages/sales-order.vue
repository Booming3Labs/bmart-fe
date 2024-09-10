
<script setup>
import { ref, onBeforeMount } from 'vue';
const addr = '0x888888'

const data = ref(null);
const status = ref('loading');

const getData = async () => {
  const res = await fetch(`https://blinkmart.up.railway.app/api/bm-orders?populate[sku_rel][populate][0]=sku_image&filters[seller_addr]=${addr}`);
  const result = await res.json();
  if (result.code == 0) {
    data.value = result.data;
    status.value = 'success';
  }
}
const updateOrder = async (item) => {
  console.log(item);
  const res = await fetch(`https://blinkmart.up.railway.app/api/bm-orders/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      deliever_status: 1
    })
  });
  const result = await res.json();
  console.log(result);
  if (result.code == 0) {
    refresh();
  }
}

onBeforeMount(() => {
  getData();
});
</script>
<template>
  <div class="wrapper">
    <div class="content" style="padding-bottom: 100px;">
      <Breadcrumb :list="[{name: '销售订单', path: ''}]" />
      <BTitle title="销售订单" style="margin-top: 8px;margin-bottom: 20px;"></BTitle>
      <List :list="(status == 'success') ? data : []" v-slot="slotProps">
        <div>
          <AButton v-if="slotProps.item.deliever_status" :background="'#71A9C8'" :notAllowed="true" text="已发货" />
          <AButton v-else text="确认发货" @click="updateOrder(slotProps.item)" />
        </div>
      </List>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add-btn {
  width: 133px;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  background-color: #5D104B;
  margin-left: 16px;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    margin: 0 4px;
  }
  span {
    font-size: 20px;
  }
}
</style>