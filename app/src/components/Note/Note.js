import { PostContext } from "@/store/postContext";
import { useContext, useEffect } from "react";

const { Flex, Text, Button } = require("@chakra-ui/react")
import Tilt from "react-parallax-tilt"
import styles from '@/components/Note/note.module.scss'
import { useWallet } from "@solana/wallet-adapter-react";


const Note = ({post}) => {

    const {init,create,user} = useContext(PostContext)
    const {publicKey} = useWallet()
    let addr ;
    if(publicKey){

        addr = publicKey.toString()
    }
  
    return(
        <Tilt  className={styles.noteTilt} glareEnable={true} scale={1.1} tiltMaxAngleX='1' tiltMaxAngleY='10' glareMaxOpacity='0.5' glareBorderRadius='10px' glarePosition="all">
            
        <Flex border='0px solid white' 
        background='rgba( 255, 255, 255, 0.1 )'
        boxShadow={addr==post.account.authority.toString()?' 0 8px 32px 0 #ff6700':" 0 8px 32px 0 purple"}
        backdropFilter='blur( 19px )'
        borderRadius='10px'
        color='white'
        flexDir='column'
        gap='2rem'
        h='25rem' p='2rem'
        w='25rem'>
            <Flex overflow='auto' h='100%'>
                <Text>
                   {post.account.content}
                  
                </Text>
            </Flex>
            <Flex  justify='flex-end'>
                <Flex>
                    <Text  noOfLines='1' maxW='5rem' >
                    {post.account.authority.toString()}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
            </Tilt>
    )
}


export default Note;