// ConnectButton.js
import React from 'react';

export default function ConnectButton() {
  return (
    <div>
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
