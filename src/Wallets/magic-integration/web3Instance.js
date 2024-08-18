In a separate file, create a hook to initialize your web3 instance.

For this quickstart we will be using the Web3.js library but you can use other web3 blockchain libraries such as Ethers.js.


import { Web3 } from  'web3';
import { useEffect, useState } from  'react';
import { useMagic } from  './MagicProvider';

const  useWeb3  = () => {
  const { magic } =  useMagic();
  const [web3, setWeb3] =  useState<Web3  |  null>(null);

  useEffect(() => {
    if (magic) {
      setWeb3(new  Web3((magic as  any).rpcProvider));
    } else {
      console.log('Magic is not initialized');
    }
  }, [magic]);
  
  return web3;
};

export  default  useWeb3;



Now whenever you need to use the web3 instance, 
import the hook into the file you need it in and call it within your component to get the web3 instance.

Typescript

const web3 = useWeb3();
The above code snippets initializes Magic and web3 with a public Sepolia Testnet URL. You can point the instance to a different chain by modifying the URL and Chain ID.

Magic seamlessly supports over 25 different blockchains.