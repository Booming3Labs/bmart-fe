<script setup>
import { ref } from "vue";

const showPrompt = ref(true);
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
      <button class="connect-wallet">Connect Wallet</button>
    </nav>
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
</style>