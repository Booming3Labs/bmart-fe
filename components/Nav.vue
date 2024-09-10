<script setup>
import { ref, watch } from "vue";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useGlobalStore } from "../hooks";

const connection = new Connection(clusterApiUrl("testnet"));
const { store, setWallet, init } = useGlobalStore();

const showPrompt = ref(true);
const showSelsctWallet = ref(false);

const connectWallet = async (wallet) => {
  console.log(wallet);
  if (wallet === 'phantom') {
    try {
      const resp = await window.solana.connect();
      console.log('resp :', resp);
      resp.publicKey.toString();
      //连接了solana钱包，得到了钱包地址
      console.log('resp.publicKey.toString() :', resp.publicKey.toString());
      // 获取余额
      const balance = await connection.getBalance(resp.publicKey);
      setWallet({
        address: resp.publicKey.toString(),
        balance: balance.toFixed(2),
        wallet: wallet,
      })
    } catch (err) {
      console.log('connectWallet err :', err);
    }
  }
  showSelsctWallet.value = false;
};

const formatAddr = (addr) => {
  return addr.slice(0, 6) + '...' + addr.slice(-4);
};

const copy = (text) => {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert('Copy Success');
};

const disconnect = () => {
  init()
};

watch(() => store.state, (newVal) => {
  console.log(newVal);
}, { deep: true });
</script>
<template>
  <div class="wrapper">
    <div v-if="showPrompt" class="prompt-wrapper">
      <p class="prompt content flex-center-center">The first Solana Blink marketplace
        <img src="../assets/images/close.svg" alt="" @click="showPrompt = false">
      </p>
    </div>
    <nav class="flex-center-sb content">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="">
      </div>
      <button v-if="!store.state.isConnited" class="connect-wallet" @click="showSelsctWallet = true">Connect
        Wallet</button>
      <div v-else class="menu flex-center-start">
        <div class="menu-item flex-center-start">
          <img src="../assets/images/package.svg" alt="">
          <NuxtLink to="/warehouse">我的仓库</NuxtLink>
        </div>
        <div class="menu-item flex-center-start">
          <img src="../assets/images/clipboard.svg" alt="">
          <NuxtLink to="/sales-order">销售订单</NuxtLink>
        </div>
        <div class="menu-item flex-center-start">
          <img src="../assets/images/user.svg" alt="">
          <NuxtLink to="/order">个人中心</NuxtLink>
        </div>
        <div class="balance flex-center-center">
          <div class="box">
            <span>{{ store.state.balance }}</span>
          </div>
          <span class="sol">SOL</span>
        </div>
        <div class="address flex-center-center">
          <img :src="store.state.walletLogo" alt="" class="wallet-logo">
          <div class="box">
            <span>{{ formatAddr(store.state.address) }}</span>
          </div>
          <div class="popup">
            <div class="wallet-popup">

              <div class="popup-title">Wallet</div>
              <div class="popup-item flex-center-start" @click="copy(store.state.address)"><img src="../assets/images/copy.svg" alt="">Copy Address</div>
              <div class="popup-item flex-center-start" @click="disconnect"><img src="../assets/images/logout.svg" alt="">Disconnect Wallet
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
    <div v-if="showSelsctWallet" class="select-wallet flex-center-center">
      <div class="selsct-wallet-box">
        <img src="../assets/images/icon/close.svg" alt="" class="close" @click="showSelsctWallet = false">
        <div class="title flex-center-start">
          <img src="../assets/images/wallet.png" alt="">
          <span>选择钱包</span>
        </div>
        <div class="list">
          <div class="item flex-center-sb" @click="connectWallet('phantom')">
            <span>Phantom</span>
            <img src="/images/phantom.png" alt="">
          </div>
          <div class="item flex-center-sb">
            <span>OKX</span>
            <img src="/images/okx.png" alt="">
          </div>
          <div class="item flex-center-sb">
            <span>Backpack</span>
            <img src="/images/backpack.png" alt="">
          </div>
          <div class="item flex-center-sb">
            <span>Solflare</span>
            <img src="/images/solflare.png" alt="">
          </div>
        </div>
        <p class="hint">By continuing, you agree to our <span>Terms of Use</span></p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  .prompt-wrapper {
    height: 38px;
    background-color: #5E104B;

    .prompt {
      height: 100%;
      font-size: 14px;
      font-weight: 300;
      color: #fff;
      position: relative;

      img {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
      }
    }
  }

  nav {
    padding-top: 24px;
    padding-bottom: 40px;
    box-sizing: border-box;

    .logo {
      img {
        width: 181px;
        height: auto;
      }
    }

    .connect-wallet {
      width: 163px;
      height: 48px;
      background-color: #333333;
      border-radius: 2px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
    }
  }
}

.menu {
  .menu-item {
    margin-right: 16px;

    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }

    a {
      font-size: 14px;
      font-weight: 600;
      color: #333333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .balance,
  .address {
    width: 182px;
    height: 48px;
    border-radius: 24px;
    background-color: #333333;
    box-sizing: border-box;
    margin-right: 16px;
    padding: 0 12px;

    .box {
      padding: 0 12px;
      height: 26px;
      display: flex;
      align-items: center;
      background: #364240;
      border-radius: 16px;
      font-size: 16px;
      font-weight: 700;
      flex: 1;
      color: #fff;
    }

    .sol {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      margin-left: 4px;
      display: inline-block;
      padding: 4px 14px;
      box-sizing: border-box;
      line-height: 20px;
      border-radius: 50px;
      background: linear-gradient(45deg, #CF41E8 0%, #10F2B0 100%);
    }

    .wallet-logo {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
  }

  .address {
    margin-right: 0;
    position: relative;
    cursor: pointer;
    &:hover .popup {
      display: block;
    }
    .popup {
      position: absolute;
      top: 48px;
      right: 0;
      left: 0;
      background-color: #fff;
      padding-top: 12px;
      display: none;
      border-radius: 16px;
    }
    .wallet-popup {
      background-color: #262626;
      border-radius: 16px;
      padding: 16px;
      box-sizing: border-box;
      .popup-title {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        line-height: 14px;
        box-sizing: border-box;
      }

      .popup-item {
        height: 32px;
        padding: 0 12px;
        box-sizing: border-box;
        background-color: #364240;
        font-size: 12px;
        font-weight: 600;
        color: #fff;
        box-sizing: border-box;
        cursor: pointer;
        margin-top: 14px;
        border-radius: 8px;

        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
    }
  }
}

.select-wallet {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;

  .selsct-wallet-box {
    width: 322px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      width: 16px;
    }

    .title {
      margin-bottom: 36px;

      img {
        width: 32px;
      }

      span {
        font-size: 20px;
        font-weight: 600;
        color: #333333;
        margin-left: 8px;
      }
    }

    .list {
      margin-bottom: 20px;

      .item {
        width: 100%;
        height: 48px;
        border: 1px solid #5D104B;
        padding: 8px 14px;
        box-sizing: border-box;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          background-color: #5D104B;

          span {
            color: #fff;
          }
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        img {
          width: 32px;
        }

        span {
          font-size: 14px;
          font-weight: 500;
          color: #5D104B;
          transition: all 0.3s;
        }
      }
    }

    .hint {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      color: #333333;

      span {
        color: #0074E0;
        cursor: pointer;
      }
    }
  }
}
</style>