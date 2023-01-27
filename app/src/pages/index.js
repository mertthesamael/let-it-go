import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Button, Flex, Img, Text } from '@chakra-ui/react'
import WalletMultiButtonDynamic from '@/components/WalletMultiButtonDynamic/WalletMultiButtonDynamic'
import { useContext } from 'react'
import { PostContext } from '@/store/postContext'
import "@solana/wallet-adapter-react-ui/styles.css"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'

export default function Home() {
  const {post}= useContext(PostContext)
  const magic = () => {
    setTimeout(() => {
      try{

        document.getElementById('easterEgg').style.visibility = 'visible'
      }catch(err){
        console.log(err)
      }
    }, 3000);
    console.log("zort")
  }
  const antiMagic = () => {
    document.getElementById('easterEgg').style.visibility = 'hidden'

  }
  return (
   <Flex h='100vh' w='100vw' align='flex-end' justify='center' bgImage='transparent'>
    <Flex color='white' gap='2rem' h='calc(100vh - 90px)' w='80%' className={styles.home}>
      <Flex h='100%' w='100%' gap='2rem' flexDir='column' justify='center'>
       <Flex>
        <Text fontSize='3rem'>Sorry for being real, but we have a problem.</Text>
       </Flex>
       <Flex>
        <Text fontSize='1.5rem'>Even 2023 is just started, there is over 75K suicide event happened already. We can fix this. We can save humanity. But in order to do that, we need to be a little &apos; B R A V E &apos;. We need to communicate. We need to talk about things that corrupts our mind. Take a deep breath, and just ;

        </Text>
        
       </Flex>
        <Flex>
          <Link className={styles.ctaLink} href='/app'>
            <div className={styles.rgb}/>
          <Button fontSize='1.5rem' p='1.7rem' onMouseOver={magic} onMouseLeave={antiMagic}>
         <span className={styles.cta}>Let it go</span>
          </Button>
          <Text visibility='hidden' id='easterEgg'>Cool button, isn&apos;t it?</Text>
          </Link>
        </Flex>
       <Flex>
       </Flex>
      </Flex>
      <Flex  h='100%' w='100%' justify='center' align='center' gap='1rem' flexDir='column'>
        <Flex>
        <Img h='300px' src='https://anthonysimeone.files.wordpress.com/2017/01/you-are-here.jpg'></Img>
        </Flex>
        <Flex>
          <Text textDecoration='italic'>The thing that you are struggling, is nothing. Trust me. Or not. Idk. Wussup ?</Text>
        </Flex>
        </Flex>
    </Flex>
   </Flex>
  )
}
