import Caver from 'caver-js';

const caver = () => {
  if (typeof window !== 'undefined') {
    // "use client"
    return new Caver(window.klaytn);
  } else {
    // "use server"
    return new Caver(new Caver.providers.HttpProvider('https://api.baobab.klaytn.net:8651'));
  }
};
export default caver();
