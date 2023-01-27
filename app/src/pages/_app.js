import WalletContextProvider from '@/components/WalletContextProvider/WalletContextProvider'
import BackgroundWrapper from '@/layouts/BackgroundWrapper/BackgroundWrapper'
import Header from '@/layouts/Header/Header'
import { PostContextWrapper } from '@/store/postContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Montserrat } from '@next/font/google'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['400']
})
export default function App({ Component, pageProps }) {
  return(
    <WalletContextProvider>
      <main className={montserrat.className}>
      <PostContextWrapper>
      <ChakraProvider>
        <BackgroundWrapper>
      <Header />
    <Component {...pageProps} />
    
        </BackgroundWrapper>
    </ChakraProvider>
      </PostContextWrapper>
      </main>
    </WalletContextProvider>
    )
}
