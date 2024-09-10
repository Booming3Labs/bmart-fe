import { reactive } from "vue";
// import Phantom from '../assets/images/phantom.png';
// import OKX from '../assets/images/okx.png';
// import Backpack from '../assets/images/backpack.png';
// import Solflare from '../assets/images/solflare.png';


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
    // store.state.walletLogo = Phantom;
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
