import { reactive } from "vue";
import Phantom from '../assets/images/icon/phantom.svg';
import OKX from '../assets/images/icon/okx.svg';
import Backpack from '../assets/images/icon/backpack.svg';
import Solflare from '../assets/images/icon/solflare.svg';


const store = reactive({
  state: {
    isConnited: false,
    balance: 0,
    address: '',
    walletLogo: '',
  }
});

const setWallet = async ({balance, address, wallet}) => {
  store.state.balance = balance;
  store.state.address = address;
  store.state.isConnited = true;
  if (wallet == 'phantom') {
    store.state.walletLogo = Phantom;
  }
  console.log('store.state', store.state);
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
