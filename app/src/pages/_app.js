import WalletContextProvider from '@/components/WalletContextProvider/WalletContextProvider'
import Header from '@/layouts/Header/Header'
import { PostContextWrapper } from '@/store/postContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ Component, pageProps }) {
  return(
    <WalletContextProvider>
      <PostContextWrapper>

    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
      </PostContextWrapper>
    </WalletContextProvider>
    )
}
