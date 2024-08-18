// import { Magic } from 'magic-sdk';

// // Initialize Magic instance with your Dedicated Wallet API Key and network configuration
// const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY, { 
//   network: {
//     rpcUrl: "https://rpc.goerli.mudit.blog/", // Replace with your desired network RPC URL
//     chainId: 5, // Goerli Testnet chain ID
//   },
// });

// // Function to log in the user with Email OTP
// async function loginWithEmailOTP(emailAddress, showUI = true) {
//   try {
//     // Log in the user using Email OTP
//     const did = await magic.auth.loginWithEmailOTP({ 
//       email: emailAddress, 
//       showUI: showUI 
//     });

//     console.log(`DID Token: ${did}`);

//     // Retrieve user information
//     const userInfo = await magic.user.getInfo();
//     console.log(`UserInfo: `, userInfo);

//     // You can now use `userInfo` for further processing
//     return userInfo;
//   } catch (error) {
//     console.error('Authentication failed:', error);
//     // Handle errors as needed
//   }
// }

// // Example usage: Call this function when the user attempts to log in
// const emailAddress = 'user@example.com';
// loginWithEmailOTP(emailAddress, true);



import React, { useState } from 'react';
import { Magic } from 'magic-sdk';

const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY, { 
  network: {
    rpcUrl: "https://rpc.goerli.mudit.blog/", // Replace with your desired network RPC URL
    chainId: 5, // Goerli Testnet chain ID
  },
});

const MagicAuthComponent = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = async () => {
    try {
      // Initiate the login process with Magic's iframe UI
      const accounts = await magic.wallet.connectWithUI();
      console.log(`Connected accounts: `, accounts);

      const info = await magic.user.getInfo();
      console.log(`UserInfo: `, info);
      setUserInfo(info);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await magic.user.logout();
      setUserInfo(null);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <h1>Magic Authentication Example</h1>
      {!userInfo ? (
        <div>
          <button onClick={handleLogin}>Login with Magic</button>
        </div>
      ) : (
        <div>
          <p>Welcome, {userInfo.email}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default MagicAuthComponent;
