import { Flex, Image, Text } from "@chakra-ui/react"
import styles from '@/layouts/Header/header.module.scss'
import Navitem from "@/components/Navitem/Navitem"
import icon from '@/assets/solana-sol-icon.png'
import WalletMultiButtonDynamic from "@/components/WalletMultiButtonDynamic/WalletMultiButtonDynamic"
import { WalletModalButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const Header = () => {


    return(
        <header className={styles.header}>
            <Flex w='100%' h='100%'>
            <Flex w='100%' h='100%' >
            <Flex>
                <Flex>
                    <Image src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/solana-sol-icon.png'}></Image>
                </Flex>
                <Flex>
                    <Text color='white'>Let it go</Text>
                </Flex>
            </Flex>
            </Flex>
            <Flex justify='center'align='center' gap='2rem' w='100%' h='100%' >
            <Navitem text='Some Navitem' target='/'/>
            <Navitem text='App' target='/app'/>
            <Navitem text='About Me' target='/'/>
            </Flex>
            <Flex w='100%' justify='center' align='center' h='100%' >
          
            <WalletMultiButton></WalletMultiButton>
          
            </Flex>
            </Flex>
        </header>
    )
}

export default Header