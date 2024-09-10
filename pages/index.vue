<script setup lang="ts">
import { ref } from "vue";
import img1 from '../assets/images/newArrivals/1.png';
import img2 from '../assets/images/newArrivals/2.png';
import img3 from '../assets/images/newArrivals/3.png';
import img4 from '../assets/images/newArrivals/4.png';

const list = ref([
  {
    id: 1,
    img: img1,
    name: '莆田系T-SHIRT',
    desc: '低价高品,帅的一P',
    price: '2.80',
  },
  {
    id: 2,
    img: img2,
    name: '养牛2年半',
    desc: '这条牛仔裤真的很帅',
    price: '1.50',
  },
  {
    id: 3,
    img: img3,
    name: '程序员格子衫',
    desc: '经典无需多言',
    price: '4.91',
  },
  {
    id: 4,
    img: img4,
    name: '绿色环保衣',
    desc: `身上穿点绿，生活才有趣，极致的潮流是返璞归真的低调，纯棉舒适，值得你白天夜里24小时穿上的衣服`,
    price: '8.88',
  },
]);
</script>
<template>
  <div class="wrapper">
    <div class="banner">
      <img src="../assets/images/banner.png" alt="">
    </div>
    <section class="content">
      <h2 class="title">NEW ARRIVALS</h2>
      <div class="list flex-center-sb">
        <div v-for="item in list" :key="item.id" class="item">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="info">
            <h5 class="name">{{ item.name }}</h5>
            <p class="desc">{{ item.desc }}</p>
            <div class="price flex-center-start">{{ item.price }}
              <span>SOL</span>
            </div>
          </div>
        </div>
      </div>
      <button class="more">查看更多</button>
    </section>
    <footer>
      <div class="content">
        <div class="subscribe flex-center-sb">
          <h1>订阅我们，获得Blinkmart<br />最新商品、功能和动态</h1>
          <div class="subscribe-r">
            <div class="input flex-center-start">
              <img src="../assets/images/icon/email.svg" alt="">
              <input type="text" placeholder="输入您的邮箱">
            </div>
            <button>订阅我们</button>
          </div>
        </div>
        <div class="flex-center-sb footer-main">
          <div class="left">
            <img src="../assets/images/logo.svg" alt="">
            <p>关注Blinkmart媒体账号获得最新资讯</p>
            <div class="flex-center-start media">
              <img src="../assets/images/icon/x.svg" alt="">
              <img src="../assets/images/icon/f.svg" alt="">
              <img src="../assets/images/icon/i.svg" alt="">
              <img src="../assets/images/icon/g.svg" alt="">
            </div>
          </div>
          <div>
            <h6>公司</h6>
            <ul>
              <li>关于我们</li>
              <li>联系我们</li>
              <li>加入我们</li>
            </ul>
          </div>
          <div>
            <h6>帮助</h6>
            <ul>
              <li>卖家支持</li>
              <li>买家售后</li>
              <li>政策条件</li>
            </ul>
          </div>
          <div>
            <h6>FAQ</h6>
            <ul>
              <li>如何售卖</li>
              <li>如何购买</li>
              <li>支付方式</li>
            </ul>
          </div>
        </div>
        <p class="website-text">Blinkmart © 2024-2028, All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  width: 100%;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
}

section {
  margin-top: 96px;
  padding-bottom: 190px;
  box-sizing: border-box;

  h2 {
    font-weight: 600;
    font-size: 48px;
    color: #000000;
    line-height: 67px;
    text-align: center;
  }

  .list {
    margin-top: 48px;

    .item {
      width: 295px;
      flex: 0 0 295px;

      .img {
        width: 100%;
        height: 298px;
        background: #F0EEED;
        border-radius: 20px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        margin-top: 16px;

        .name {
          font-size: 20px;
          font-weight: 600;
          color: #333333;
          line-height: 28px;
        }

        .desc {
          font-size: 14px;
          font-weight: 300;
          color: #666666;
          line-height: 20px;
          margin-top: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .price {
          font-size: 24px;
          font-weight: 500;
          line-height: 34px;
          color: #333333;
          margin-top: 4px;

          span {
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
        }
      }
    }
  }

  .more {
    display: block;
    margin: auto;
    margin-top: 32px;
    width: 218px;
    height: 52px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 52px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
}

footer {
  padding: 140px 0 80px;
  box-sizing: border-box;
  background: #F0F0F0;

  .content {
    position: relative;

    .subscribe {
      position: absolute;
      top: 0px;
      left: 0;
      transform: translateY(calc(-100% - 48px));
      width: 100%;
      height: 180px;
      background: #5D104B;
      border-radius: 20px;
      padding: 0 64px;
      box-sizing: border-box;

      h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 45px;
        color: #fff;
      }

      .subscribe-r {
        .input {
          width: 349px;
          height: 48px;
          background: #fff;
          border-radius: 48px;
          padding: 0 16px;
          box-sizing: border-box;

          img {
            width: 24px;
          }

          input {
            flex: 1;
            width: 100%;
            height: 100%;
            background: #fff;
            border: none;
            border-radius: 48px;
            padding-left: 16px;
            font-size: 16px;
            font-weight: 400;
            color: #000000;
            box-sizing: border-box;
          }
        }

        button {
          width: 349px;
          height: 48px;

          background: #fff;
          border-radius: 48px;
          cursor: pointer;
          border: none;
          margin-top: 14px;
          font-size: 16px;
          font-weight: 500;
          color: #7D0360;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .footer-main {
      padding-bottom: 56px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .left {
      img {
        width: 181px;
        height: auto;
      }

      p {
        margin-top: 16px;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        color: rgba($color: #000000, $alpha: .6);
        margin-bottom: 24px;
      }

      .media {
        gap: 16px;

        img {
          width: 28px;
          cursor: pointer;
        }
      }
    }

    h6 {
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      color: #000000;
      letter-spacing: 3px;
    }

    ul {
      margin-top: 24px;
      padding-left: 0;
      list-style: none;

      li {
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: rgba($color: #000000, $alpha: .6);
        cursor: pointer;
        margin-bottom: 16px;
      }
    }
  }

  .website-text {
    margin-top: 28px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: rgba($color: #000000, $alpha: .6);
  }
}
</style>