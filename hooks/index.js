import { reactive } from "vue";

const store = reactive({
  state: {
    isConnited: false,
    balance: 0,
    address: '',
    wallet: '',
  }
});

const setWallet = async ({balance, address, wallet}) => {
  store.state.balance = balance;
  store.state.address = address;
  store.state.isConnited = true;
  store.state.wallet = wallet;
};

const init = () => {
  store.state.isConnited = false;
  store.state.balance = 0;
  store.state.address = '';
  store.state.walletLogo = '';
};


export const useGlobalStore = () => ({
  store,
  init,
  setWallet
});
