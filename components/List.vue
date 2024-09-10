<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['list', 'type']);

const dataList = ref([]);

const getImg = (item) => {
  return `https://blinkmart.up.railway.app${item.sku_image[0].url}`;
};

watch(() => props.list, (newVal) => {
  console.log(newVal);
  dataList.value = newVal.map((item) => {
    return {
      ...item,
      ...item.sku_rel
    };
  });
  console.log(dataList.value);
}, { immediate: true });
</script>
<template>
  <div class="list">
    <div v-for="item in dataList" :key="item.id" class="item flex-center-sb">
      <div class="img">
        <img :src="getImg(item)" alt="">
      </div>
      <div class="info flex-start-sb">
        <h5 class="name">{{ item.name }}</h5>
        <p class="desc">物品简介: {{ item.desc }}</p>
        <div class="price flex-center-start">
          <p>单价: {{ item.price }}</p>
          <button>SOL</button>
          <div v-if="type == 'warehouse'" class="count flex-center-start">
            <label>总量: <span>{{ item.spu }}</span></label>
            <div class="line"></div>
            <label>已售: <span>{{ item.sales_amount }}</span></label>
          </div>
          <div v-else class="count flex-center-start">
            <label>数量: <span>{{ item.sku_amounts }}</span></label>
          </div>
        </div>
      </div>
      <div class="btns flex-end-sb">
        <p v-if="type == 'warehouse'" class="status" :style="{background: item.shelf_status ? '#E9FFF6' : '#FFE8C5', color: item.shelf_status ? '#319470' : '#C6821C'}">{{ item.shelf_status ? '上架中' : '已下架' }}</p>
        <p v-else-if="type == 'order'" class="status" :style="{background: item.shelf_status == 2 ? '#C5E6FF' : '#FFEDE9', color: item.shelf_status == 2 ? '#1C89C6' : '#B5370F'}">{{ item.deliever_status == 2 ? '已收货' : '等待收货' }}</p>
        <p v-else></p>
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.list {
  padding: 0px 24px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  .item {
    padding: 20px 0;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .img {
      width: 124px;
      height: 124px;
      flex: 0 0 124px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info {
      margin-left: 16px;
      flex: 1;
      height: 124px;
      flex-direction: column;
      .name {
        font-size: 20px;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
      }
      .desc {
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        color: #666666;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
      .price {
        margin-top: 8px;
        p {
          font-size: 24px;
          font-weight: 500;
          color: #333333;
          line-height: 34px;
        }
        button {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-left: 10px;
          display: inline-block;
          padding: 4px 14px;
          box-sizing: border-box;
          line-height: 20px;
          border-radius: 50px;
          background: linear-gradient(45deg, #CF41E8 0%, #10F2B0 100%);
        }
        .count {
          height: 28px;
          background: #F0F0F0;
          border-radius: 20px;
          margin-left: 32px;
          .line {
            width: 2px;
            height: 14px;
            background-color: #333333;
            margin: 0;
            border-radius: 10px;
          }
          label {
            text-align: center;
            display: inline-block;
            width: 120px;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;
            color: #333333;
            span {
              color: #2981E8;
              background: none;
            }
          }
        }
      }
    }
    .btns {
      width: 264px;
      height: 124px;
      flex: 0 0 264px;
      flex-direction: column;
      .status {
        padding: 2px 20px;
        box-sizing: border-box;
        border-radius: 20px;
        background: #E9FFF6;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        color: #319470;
      }
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
    }
  }
}
</style>