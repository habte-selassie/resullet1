import { ethers, formatEther } from 'ethers';

export const getBalance = async (address, callback) => {
  try {
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    callback(formatEther(balance));
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
};

export const connectWithWallet = async (callback) => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      callback(accounts[0]);
    } catch (error) {
      console.error('Error connecting with wallet:', error);
      alert('Please install MetaMask!');
    }
  } else {
    alert('Please install MetaMask!');
  }
};
