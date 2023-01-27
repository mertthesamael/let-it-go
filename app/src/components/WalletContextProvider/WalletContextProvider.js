import { FC, ReactNode } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as web3 from '@solana/web3.js'

import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const WalletContextProvider = ({ children }) => {
  const endpoint = web3.clusterApiUrl('devnet')
  const wallets = new PhantomWalletAdapter()

	return (
	<ConnectionProvider endpoint={endpoint}>
	    <WalletProvider autoConnect wallets={[wallets]}>
	      <WalletModalProvider >
	        { children }
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
	)
}

export default WalletContextProvider