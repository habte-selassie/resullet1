// App.js
import React from 'react';
import { useReadContract } from 'wagmi';
import { USDTAbi } from '../abi/USDTAbi';

function App1() {
  const USDTAddress = '0x...'; // Replace with the actual USDT contract address

  const { data: totalSupply, isError, isLoading } = useReadContract({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'totalSupply',
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      Total Supply: {totalSupply?.toString()}
    </div>
  );
}

export default App1;
