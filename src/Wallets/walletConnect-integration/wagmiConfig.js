// wagmiConfig.js
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { createConfig } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { authConnector } from '@web3modal/wagmi';
import { ethers } from 'ethers';

const projectId = '26dc1f824bc0b2859d173afe03a48460';

const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum];

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    authConnector({
      chains,
      options: { projectId },
      email: true,
      socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
      showWallets: true,
      walletFeatures: {
        onRamp: true,
        swaps: true,
      },
    }),
  ],
  publicClient: new ethers.providers.JsonRpcProvider(), 
  projectId,
});

createWeb3Modal({
  metadata,
  wagmiConfig,
  projectId,
  enableAnalytics: true,
});
