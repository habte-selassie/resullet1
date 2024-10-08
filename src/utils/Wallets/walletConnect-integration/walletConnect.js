import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig, createConfig, WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { authConnector } from '@web3modal/wagmi'
import { useReadContract } from 'wagmi'
import { USDTAbi } from '../abi/USDTAbi'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '26dc1f824bc0b2859d173afe03a48460'

// 2. Define metadata
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]

// 3. Create wagmiConfig with authentication and social login support
const wagmiConfig = createConfig({
  autoConnect: true, // Automatically reconnects when the user returns
  connectors: [
    authConnector({
      chains,
      options: { projectId },
      email: true,
      socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
      showWallets: true,
      walletFeatures: true
    })
  ],
  publicClient: new ethers.providers.JsonRpcProvider(), // Use your preferred provider here
  projectId
})

// 4. Create Web3Modal
createWeb3Modal({
  metadata,
  wagmiConfig,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

// 5. Create AppKitProvider component
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

// 6. Create ConnectButton component
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
  )
}

// 7. Wagmi hooks for interacting with smart contracts
function App() {
  const USDTAddress = '0x...' // Replace with the actual USDT contract address

  const { data: totalSupply, isError, isLoading } = useReadContract({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'totalSupply'
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  return (
    <div>
      Total Supply: {totalSupply.toString()}
    </div>
  )
}

// import { createWeb3Modal } from '@web3modal/wagmi/react'
// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

// import { WagmiProvider } from 'wagmi'
// import { arbitrum, mainnet } from 'wagmi/chains'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// // 0. Setup queryClient
// const queryClient = new QueryClient()

// // 1. Get projectId from https://cloud.walletconnect.com
// const projectId = '26dc1f824bc0b2859d173afe03a48460'

// // 2. Create wagmiConfig
// const metadata = {
//   name: 'AppKit',
//   description: 'AppKit Example',
//   url: 'https://web3modal.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }

// const chains = [mainnet, arbitrum] as const

// // const config = defaultWagmiConfig({
// //   chains,
// //   projectId,
// //   metadata,
// // })

// const wagmiConfig = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   auth: {
//     email: true, // default to true
//     socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
//     showWallets: true, // default to true
//     walletFeatures: true // default to true
//   }
// })


// // Wagmi Connector
// // If you're using the createConfig function from Wagmi, you can enable social or email login by importing and adding the authConnector function in your configuration.

// // import { authConnector } from '@web3modal/wagmi'

// // //...

// // const wagmiConfig1 = createConfig({
// //   //...
// //   connectors: [
// //     //...

// //     authConnector({
// //       chains,
// //       options: { projectId },
// //       email: true, // default to true
// //       socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
// //       showWallets: true, // default to true
// //       walletFeatures: true // default to true
// //     })
// //   ]
// // })




// // 3. Create modal
// createWeb3Modal({
//   metadata,
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true // Optional - defaults to your Cloud configuration
// })

// export function AppKitProvider({ children }) {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </WagmiProvider>
//   )
// }

// export default function ConnectButton() {
//     return (
//         <div>
//      <w3m-button 
//     disabled = 'false'
//     balance = 'show'
//     size = 'md'
//     label = 'resullet wallet'
//     loadingLabel = 'hey there'
//      />

//      <w3m-account-button
//       disabled = 'false'
//       balance = 'show' />

//   <w3m-connect-button
//   size = 'md'
//    label = 'connect resullet wallet '
//    loadingLabel = 'connect hey there' />
    
//     <w3m-network-button  disabled = 'false' />
//      </div>
//     )
   
//   }

//  // Wagmi hooks can help us interact with wallets and smart contracts:


//   import { useReadContract } from 'wagmi'
// import { USDTAbi } from '../abi/USDTAbi'

// const USDTAddress = '0x...'

// function App() {
//   const result = useReadContract({
//     abi: USDTAbi,
//     address: USDTAddress,
//     functionName: 'totalSupply'
//   })
// }