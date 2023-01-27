import WalletContextProvider from '@/components/WalletContextProvider/WalletContextProvider'
import BackgroundWrapper from '@/layouts/BackgroundWrapper/BackgroundWrapper'
import { ChakraProvider } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from "../layouts/Header/Header"



export default function Document() {
  return (

    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
