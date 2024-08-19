import { MetaMaskProvider } from "@metamask/sdk-react";
import { useSDK } from "@metamask/sdk-react";
import React, { useState } from "react";

export const App: React.FC = () => {
  const [account, setAccount] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const { sdk, connected, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.error("Failed to connect:", err);
    }
  };

  const connectAndSign = async () => {
    try {
      const signResult = await sdk?.connectAndSign({
        msg: "Connect + Sign message",
      });
      setResponse(signResult);
    } catch (err) {
      console.error("Failed to connect and sign:", err);
    }
  };

  return (
    <div className="App">
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
      <button style={{ padding: 10, margin: 10 }} onClick={connectAndSign}>
        Connect & Sign
      </button>
      {connected && (
        <div>
          {chainId && <p>Connected chain: {chainId}</p>}
          {account && <p>Connected account: {account}</p>}
          {response && <p>Sign result: {response}</p>}
        </div>
      )}
    </div>
  );
};
