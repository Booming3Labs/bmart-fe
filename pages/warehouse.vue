<script setup>
const addr = '0x888888'
const { data, status, error, refresh, clear } = await useFetch(`https://blinkmart.up.railway.app/api/skus?populate=*&filters[seller_addr]=${addr}`);
const router = useRouter();
const update = async (item) => {
  console.log(item);
  const res = await fetch(`https://blinkmart.up.railway.app/api/skus/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      shelf_status: Number(!item.shelf_status)
    })
  });
  const result = await res.json();
  console.log(result);
  if (result.code == 0) {
    refresh();
  }
}

const create = () => {
  router.push('/post/');
}
</script>
<template>
  <div class="wrapper">
    <div class="content" style="padding-bottom: 100px;">
      <Breadcrumb :list="[{name: '我的仓库'}]" />
      <BTitle title="我的仓库" style="margin-top: 8px;margin-bottom: 20px;">
        <div class="add-btn flex-center-center" @click="create">
          <span>+</span><img src="../assets/images/icon/package.svg" alt="">创建新商品
        </div>
      </BTitle>
      <List :list="(status == 'success' && data.code == 0) ? data.data : []" type="warehouse" v-slot="slotProps">
        <div class="flex-center-start" style="gap: 6px">
          <!-- <AButton text="编辑" background="#E26D00" /> -->
          <AButton v-if="slotProps.item.shelf_status" text="下架" @click="update(slotProps.item)" />
          <AButton v-else text="上架" @click="update(slotProps.item)" />
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