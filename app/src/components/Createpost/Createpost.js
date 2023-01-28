import { PostContext } from "@/store/postContext"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Textarea, Button, Text, useToast, ChakraProvider } = require("@chakra-ui/react")




const Createpost = ({isOpen, onClose}) => {

    const {create} = useContext(PostContext)
    const toast = useToast()
    const [err,setErr] = useState(false)
    const router = useRouter()
    const post = async(e) => {
        e.preventDefault()

        if(!e.target.post.value){
            setErr(true)
            
        }else{

            try{
                create(e.target.post.value)
                setTimeout(() => {
                    onClose()
                }, 1000);
               router.reload(window.location.pathname)
            }catch(err){
                toast({
                    status:'error',
                    title:err.message
                })
            }
        }
    }

    return(
      
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent color='white' h='50rem'w='50rem' bgColor='rgba( 255, 255, 255, 0.1 )' backdropFilter='blur(29px)'>
                <ModalHeader>Hey there, brave soul.</ModalHeader>
                <ModalBody display='flex' flexDir='column' gap='5rem'>
                <Text>Please keep that in mind, once you have registered your post, your name and avatar will not gonna display on the post. Only thing will shown is your Public Addres. And you have only 1 chance to let it go. So think twice !</Text>
                    <form onSubmit={post} style={{display:'flex', width:'100%', flexDirection:'column', gap:'2rem'}}>
                        <Textarea isInvalid={err} name='post' h='20rem' resize="none"></Textarea>
                        <Button type='submit' colorScheme='purple'>
                            Let it go !
                        </Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
       
    )
}

export default Createpost;