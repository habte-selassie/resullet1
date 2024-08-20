import { createWeb3Modal } from '@web3modal/wagmi/react';
import { createConfig, WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { authConnector } from '@web3modal/wagmi';
import { useReadContract } from 'wagmi';
import { USDTAbi } from '../abi/USDTAbi';
import { ethers } from 'ethers';

// Setup QueryClient
const queryClient = new QueryClient();

// Use environment variables for sensitive data
const projectId = process.env.REACT_APP_PROJECT_ID || 'default-project-id';

// Metadata for Web3Modal
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum];

// Create wagmiConfig
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    authConnector({
      chains,
      options: { projectId },
      email: true,
      socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
      showWallets: true,
      walletFeatures: true,
    }),
  ],
  publicClient: new ethers.providers.JsonRpcProvider(),
  projectId,
});

// Create Web3Modal
createWeb3Modal({
  metadata,
  wagmiConfig,
  projectId,
  enableAnalytics: true,
});

// AppKitProvider component
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

// ConnectButton component
export default function ConnectButton() {
  return (
    <div className="flex space-x-2">
      <w3m-button
        disabled={false}
        balance="show"
        size="md"
        label="Resullet Wallet"
        loadingLabel="Loading..."
      />
      <w3m-account-button
        disabled={false}
        balance="show"
      />
      <w3m-connect-button
        size="md"
        label="Connect Resullet Wallet"
        loadingLabel="Connecting..."
      />
      <w3m-network-button disabled={false} />
    </div>
  );
}

// Wagmi hooks for interacting with smart contracts
export function App() {
  const USDTAddress = process.env.REACT_APP_USDT_ADDRESS || '0x...';

  const { data: totalSupply, isError, isLoading } = useReadContract({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'totalSupply',
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return <div>Total Supply: {totalSupply ? totalSupply.toString() : 'N/A'}</div>;
}
