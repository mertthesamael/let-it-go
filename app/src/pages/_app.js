import WalletContextProvider from '@/components/WalletContextProvider/WalletContextProvider'
import BackgroundWrapper from '@/layouts/BackgroundWrapper/BackgroundWrapper'
import Header from '@/layouts/Header/Header'
import { PostContextWrapper } from '@/store/postContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ Component, pageProps }) {
  return(
    <WalletContextProvider>
      <PostContextWrapper>
      <ChakraProvider>
        <BackgroundWrapper>
      <Header />
    <Component {...pageProps} />
        </BackgroundWrapper>
    </ChakraProvider>
      </PostContextWrapper>
    </WalletContextProvider>
    )
}
