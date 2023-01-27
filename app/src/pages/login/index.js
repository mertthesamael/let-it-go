import Createpost from "@/components/Createpost/Createpost"
import LoginForm from "@/components/LoginForm/LoginForm"
import WalletMultiButtonDynamic from "@/components/WalletMultiButtonDynamic/WalletMultiButtonDynamic"
import { PostContext } from "@/store/postContext"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

const { Flex, Button, Text, Img, useToast, ChakraProvider, useDisclosure } = require("@chakra-ui/react")




const Login = () => {

    const {userInfo, init, isInitialized} = useContext(PostContext)
    const router = useRouter()
    const {publicKey} = useWallet()



useEffect(() => {
    if(isInitialized&&publicKey){
        router.push('/')
    }
},[userInfo])

    return(
    
        <ChakraProvider>

        <Flex w='100%' h='100%' align='center' justify='center'>
            <Flex border='0px solid white' h='35rem' p='4rem'
            background='rgba( 255, 255, 255, 0.1 )'
            boxShadow=' 0 8px 32px 0 purple'
            backdropFilter='blur( 19px )'
            borderRadius='10px'
            color='white'
            flexDir='column'
            align='center'
            justify='center'
            gap='2rem'
            w='30rem'
            >
                {isInitialized ? 
                <Flex flexDir='column' align='center' textAlign='center'>
                    <Text>Oh you are already Initialized ! Connect your wallet to continue.</Text>
                    <WalletMultiButtonDynamic></WalletMultiButtonDynamic>
                </Flex>
                    :
                    <>
                <Flex w='100%' h='100%' justify='center'>
                <WalletMultiButtonDynamic />
                </Flex>
                <Flex w='100%' >

           <LoginForm></LoginForm>
                </Flex>
                    <Text textAlign='center'>Be sure about info that you gave and check the info below if it&apos;s aight !</Text>
                <Flex align='center' gap='1rem'>
                    <Flex>
                        <Img p='2px' borderRadius='50px' border='1px solid white' w='50px' h='50px'src={userInfo.picture}></Img>
                    </Flex>
                    <Text>{userInfo.name}</Text>

                </Flex>
                <Flex>
                </Flex>
            </>
            }

        
            </Flex>
        </Flex>
              
                </ChakraProvider>
    )
}

export default Login