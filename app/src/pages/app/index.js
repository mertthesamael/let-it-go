import Createpost from "@/components/Createpost/Createpost"
import Note from "@/components/Note/Note"
import { PostContext } from "@/store/postContext"
import { AddIcon, CloseIcon } from "@chakra-ui/icons"
import { useWallet } from "@solana/wallet-adapter-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
const { Flex, Button, useDisclosure, useToast, ChakraProvider } = require("@chakra-ui/react")



const App = () => {

    const { post, isInitialized, userInfo} = useContext(PostContext)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {publicKey} = useWallet()
    const router = useRouter()
    const toast = useToast()
    useEffect(() => {
        if(!publicKey){
            router.push('/login')
        }
    },[])
    const morePost = () => {
        toast({
            title:'Developer is lack of tech info',
            description:'Wait for me to learn things so you can post more than one post xd'
        })
    }
    return(
        <ChakraProvider>
        <Flex w='100%' pos='relative' zIndex={'2'} h='100%' paddingTop='90px'  justify='center'>
            <Flex w='100%' flexDir='column'>

            <Flex gap='2rem' p='5rem' flexWrap='wrap' overflow='auto' justify={['center',"center",'flex-start']}  w='100%'>
            {post.map(post => <Note post={post}></Note>)}
            </Flex>
                
            <Flex pos='absolute' bottom='5rem' right='5rem'>
                
                {
                    isInitialized?
                    userInfo.posted? 
                    <Button h='60px' borderRadius='50px' onClick={morePost} w='60px' colorScheme='purple' bgColor='transparent' border='2px solid white'>
               <CloseIcon h='2rem' w='2rem'></CloseIcon>
                </Button>
                :
                <Button h='60px' borderRadius='50px' w='60px'onClick={onOpen} colorScheme='purple' bgColor='transparent' border='2px solid white'>
               
            <AddIcon h='2rem' w='2rem'></AddIcon>
            </Button>

:
<Link href='/login'>
            <Button>Sign Up</Button>
            </Link>
        }
            </Flex>

            </Flex>

            <Createpost isOpen={isOpen} onClose={onClose}/>
        </Flex>
        </ChakraProvider>
    )
}

export default App