import WalletContextProvider from '@/components/WalletContextProvider/WalletContextProvider'
import BackgroundWrapper from '@/layouts/BackgroundWrapper/BackgroundWrapper'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from "../layouts/Header/Header"
export default function Document() {
  return (
    
    <Html lang="en">
      <Head />
      <body>
      <WalletContextProvider>
        <BackgroundWrapper>

        <Header></Header>
        <Main />
        <NextScript />
       
        </BackgroundWrapper>
    </WalletContextProvider>
      </body>
    </Html>
  )
}
