<script setup>
import { ref } from 'vue';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI1OTc0NTE5LCJleHAiOjE3Mjg1NjY1MTl9.YPKeVfndYU6_gSgvqiR2xiCjABRL4XKgke6VO79nA6g'

const router = useRouter();
const data = ref({});

const uploadImg = (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  fetch('https://blinkmart.up.railway.app/upload', {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(res => res.json()).then(res => {
    console.log(res);
    data.value.sku_image = {
      "connect": [3]
    }
  });
};

const submit = () => {
  data.value.seller_addr = '0x888888';
  data.value.sales_amount = 0;
  data.value.shelf_status = 0;
  fetch('https://blinkmart.up.railway.app/api/skus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data.value)
  }).then(res => res.json()).then(res => {
    console.log(res);
    router.replace('/warehouse/');
  });
}
</script>
<template>
  <div class="wrapper">
    <div class="content" style="padding-bottom: 100px;">
      <Breadcrumb :list="[{name: '我的仓库', path: '/warehouse/'}, {name: '创建新商品'}]" />
      <div class="form flex-start-sb">
        <div class="l">
          <div class="form-item">
            <label for="img">
              <img src="../assets/images/icon/upload.svg" alt="" class="upload-img">
            </label>
            <input type="file" id="img" placeholder="请选择商品图片" style="display: none" @change="uploadImg">
          </div>
        </div>
        <div class="r flex-start-sb">
          <div>
            <div class="form-item">
              <label for="name">商品名称</label>
              <input type="text" v-model="data.name" placeholder="请输入商品名称">
            </div>
            <div class="form-item">
              <label for="desc">商品介绍</label>
              <input type="text" v-model="data.desc" placeholder="请输入商品介绍">
            </div>
            <div class="form-item">
              <label for="price">商品单价</label>
              <input type="number" min="0" v-model="data.price" placeholder="请输入商品单价">
            </div>
            <div class="form-item">
              <label for="price">库存数量</label>
              <input type="number" min="0" v-model="data.spu" placeholder="请输入仓库数量">
            </div>
          </div>
          <button class="submit" @click="submit">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form {
  margin-top: 10px;
}

.upload-img {
  width: 480px;
  height: 480px;
  cursor: pointer;
}

.r {
  flex-direction: column;
  height: 480px;

  .form-item {
    height: 46px;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 36px;
    }

    label {
      font-weight: 500;
      margin-right: 8px;
      font-size: 16px;
      color: #333333;
    }

    input {
      width: 585px;
      height: 46px;
      padding: 0 16px;
      box-sizing: border-box;
      background: #F0F0F0;
      font-size: 16px;
      color: #333333;
      border-radius: 40px;
    }
  }

  .submit {
    width: 660px;
    height: 52px;
    background: #5D104B;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
}
</style>