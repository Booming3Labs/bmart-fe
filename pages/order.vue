<script setup>
const addr = '0x111111'
const { data, status, error, refresh, clear } = await useFetch(`https://blinkmart.up.railway.app/api/bm-orders?populate[sku_rel][populate][0]=sku_image&filters[buyer_addr]=${addr}`);
const updateOrder = async (item) => {
  console.log(item);
  const res = await fetch(`https://blinkmart.up.railway.app/api/bm-orders/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      deliever_status: 2
    })
  });
  const result = await res.json();
  console.log(result);
  if (result.code == 0) {
    refresh();
  }
}
</script>
<template>
  <div class="wrapper">
    <div class="content" style="padding-bottom: 100px;">
      <Breadcrumb :list="[{name: '个人中心', path: ''}]" />
      <BTitle title="购买的商品" style="margin-top: 8px;margin-bottom: 20px;"></BTitle>
      <List :list="(status == 'success' && data.code == 0) ? data.data : []" type="order" v-slot="slotProps">
        <div>
          <AButton v-if="slotProps.item.deliever_status == 1" text="确认收货" @click="updateOrder(slotProps.item)" />
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