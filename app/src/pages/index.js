import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex } from '@chakra-ui/react'
import WalletMultiButtonDynamic from '@/components/WalletMultiButtonDynamic/WalletMultiButtonDynamic'
import { useContext } from 'react'
import { PostContext } from '@/store/postContext'
import "@solana/wallet-adapter-react-ui/styles.css"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Home() {
  const {post}= useContext(PostContext)
  console.log(post)
  return (
   <Flex h='100vh' justify='center' align='center' bgImage='transparent'>
    <Flex>
      <WalletMultiButtonDynamic></WalletMultiButtonDynamic>
    </Flex>
   </Flex>
  )
}
