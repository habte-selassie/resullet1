import { ethers } from 'ethers'
import {
  SafeAuthPack,
  SafeAuthConfig,
  SafeAuthInitOptions,
} from '@safe-global/auth-kit'

const safeAuthConfig = {
    txServiceUrl: 'https://safe-transaction-mainnet.safe.global',
  }
  const safeAuthInitOptions = {
    enableLogging: true,
    showWidgetButton: false,
    chainConfig: {
      chainId: '0x1',
      rpcTarget: RPC_URL
    }
  }
  
  // You can also pass the SafeAuthConfig as a parameter to the SafeAuthPack constructor if you are using a custom txServiceUrl domain
  // e.g. const safeAuthConfig: SafeAuthConfig = {
  //   txServiceUrl: 'https://safe-transaction-mainnet.safe.global'
  // }


  // const safeAuthPack = new SafeAuthPack(safeAuthConfig)

  await safeAuthPack.init(safeAuthInitOptions)


  // The signIn() method returns the user's Ethereum address and the associated Safe addresses
  // The `await` will last until the user is authenticated. Therefore, it will be active while the authentication popup is being displayed.
   const authKitSignData = await safeAuthPack.signIn()


  //  AuthKitSignInData {
  //   eoa: string // The safe signer
  //   safes?: string[] // The list of associated Safe addresses in the chain
  // }
  
  await safeAuthPack.signOut()

  safeAuthPack.getProvider()


  const accountChangedHandler = (accounts) => {
    console.log('Signer accounts:', accounts)
  }
  
  safeAuthPack.subscribe('accountsChanged', accountChangedHandler)
  safeAuthPack.unsubscribe('accountsChanged', accountChangedHandler)
  
  const safeAuthPack = new SafeAuthPack()


  // Instantiate the Protocol Kit
const protocolKit = await Safe.init({
  provider: safeAuthPack.getProvider(),
  safeAddress,
})

// Create a Safe transaction with the provided parameters
const safeTransactionData
//: MetaTransactionData 
= {
  to: `${ethAddress}`,
  data: '0x',
  value: ethers.parseUnits('0.0001', 'ether').toString(),
}

const safeTransaction = await protocolKit.createTransaction({
  transactions: [safeTransactionData],
})

// Sign the transaction if the Safe have several owners
// safeTransaction = await protocolKit1.signTransaction(safeTransaction)
// safeTransaction = await protocolKit2.signTransaction(safeTransaction)

// Execute the transaction
await protocolKit.executeTransaction(safeTransaction)



// Using web3
const web3 = new Web3(safeAuthPack.getProvider())

await web3.eth.sendTransaction(tx)
await web3.eth.signTransaction(tx)
const message = 'hello world'
const address = '0x...'
await web3.eth.personal.sign(message, address)

// Using ethers
const provider = new ethers.BrowserProvider(safeAuthPack.getProvider())
const signer = provider.getSigner()

await signer.sendTransaction(tx)
await signer.signTransaction(tx)
await signer.signMessage(message)
