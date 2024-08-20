import { useState } from 'react';
import { createWeb3Modal, Web3Modal } from '@web3modal/wagmi/react';

const connectButtonStyles = {
  button: 'bg-blue-500 text-white p-2 rounded',
  disabledButton: 'bg-gray-400 text-white p-2 rounded',
};

export default function ConnectButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      const modal = createWeb3Modal();
      const provider = await modal.connect();
      setIsConnected(true);
      // Handle provider and connection logic here
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={isConnected ? connectButtonStyles.button : connectButtonStyles.disabledButton}
      onClick={handleConnect}
      disabled={loading}
    >
      {loading ? 'Connecting...' : isConnected ? 'Connected' : 'Connect Wallet'}
    </button>
  );
}
