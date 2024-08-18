// import {  magic } from 'magic-sdk'

const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY,{
    network: {
        rpcUrl: "<https://rpc2.sepolia.org/>",
        chainId: 11155111,
    },

    deferPreload: true
})


//The suggested approach for the Magic instance is to create a hook so Magic can be made 
//available and used across the whole application like the one below.


import { Magic as MagicBase } from 'magic-sdk';
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Magic = MagicBase<OAuthExtension[]>;

type MagicContextType = {
  magic: Magic | null;
};

const MagicContext = createContext<MagicContextType>({
  magic: null,
});

export const useMagic = () => useContext(MagicContext);

const MagicProvider = ({ children }: { children: ReactNode }) => {
  const [magic, setMagic] = useState<Magic | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
      const magic = new MagicBase(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string, {
        network: {
          rpcUrl: "<https://rpc2.sepolia.org/>",
          chainId: 11155111,
        },
      });

      setMagic(magic);
    }
  }, []);

  const value = useMemo(() => {
    return {
      magic,
    };
  }, [magic]);

  return <MagicContext.Provider value={value}>{children}</MagicContext.Provider>;
};

export default MagicProvider;


// When you want to use the Magic instance, import the hook 
// and destructure the required properties from it, which in this case is the Magic instance itself.

// Typescript

const { magic } = useMagic();



// Function to authenticate a user
async function authenticateUser() {
    try {
      // Display Magic's Login UI and authenticate user
      await magic.wallet.connectWithUI();
  
      // Once authenticated, you can retrieve the user's metadata
      const userMetadata = await magic.user.getMetadata();
      console.log('User metadata:', userMetadata);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }


  // Function to log out the user
async function logoutUser() {
    try {
      await magic.user.logout();
      console.log('User logged out');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
  
  // Example usage
  authenticateUser();
  // Call `logoutUser()` when you want to log the user out
