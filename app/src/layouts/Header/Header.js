import { Button, Flex, Image, Img, Text } from "@chakra-ui/react"
import styles from '@/layouts/Header/header.module.scss'
import Navitem from "@/components/Navitem/Navitem"
import icon from '@/assets/solana-sol-icon.png'
import WalletMultiButtonDynamic from "@/components/WalletMultiButtonDynamic/WalletMultiButtonDynamic"
import { WalletModalButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"
import { useContext } from "react"
import { PostContext } from "@/store/postContext"
import { useWallet } from "@solana/wallet-adapter-react"

const Header = () => {

    const {isInitialized, userInfo, user} = useContext(PostContext)
    const {publicKey} = useWallet()
    console.log(publicKey,isInitialized, user)
    console.log("zort")
    return(
        <header className={styles.header}>
            <Flex w='90%' h='100%' justify='center'>
                <Flex h='100%' w='100%' gap='1.5rem' align='center'>
                    <Flex>
                        <Image h='30px' src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/solana-sol-icon.png'}></Image>
                    </Flex>
                    <Flex>
                        <Link href='/'>
                        <Text color='white' fontWeight='bolder' fontSize={['0.6rem','0.7rem','1rem']}>Let it go</Text>
                        </Link>
                    </Flex>
                </Flex>

                <Flex justify='space-between'align='center'  w='100%' h='100%' >
                <Navitem text='App' target='/app'/>
                <Navitem text='About' target='/about'/>
                </Flex>

                <Flex w='100%' justify='flex-end' align='center' h='100%' >
                
                    {publicKey && isInitialized ? 
                    <Flex color='white' align='center' gap='1rem'>
                        <Text>{userInfo.name}</Text>
                        <Img h='30px' w='30px' borderRadius='50px' src={userInfo.picture}></Img>
                    </Flex>
                        :
                <Link href='/login' style={{}}>
                    <Button colorScheme='purple'>
                        Login
                    </Button>
                </Link>
                    }
            
                </Flex>

            </Flex>
        </header>
    )
}

export default Header