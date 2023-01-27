import WalletContextProvider from '@/components/WalletContextProvider/WalletContextProvider'
import BackgroundWrapper from '@/layouts/BackgroundWrapper/BackgroundWrapper'
import { ChakraProvider } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import Header from "../layouts/Header/Header"



export default function Document() {
  return (

    <Html lang="en">
<title>Let it go</title>
      <Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
