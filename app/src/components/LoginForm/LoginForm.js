import { PostContext } from "@/store/postContext"
import { useWallet } from "@solana/wallet-adapter-react"
import { useRouter } from "next/router"

const { Input, Button, useToast } = require("@chakra-ui/react")
const { useContext, useEffect, useState } = require("react")




const LoginForm = () => {

    const {init,userInfo, userInfoHandler} = useContext(PostContext)
    const {publicKey} = useWallet()
    const toast = useToast()
    const [nameEr, setNameEr] = useState()
    const [pictureEr, setPictureEr] = useState()
    const router = useRouter()
    const initUser = async(e) => {
        e.preventDefault()
        if(publicKey){
            if(!e.target.name.value){

                setNameEr(!e.target.name.value)
            }else{

                await init('e.target.name.value','e.target.pp.value').then(() => router.push('/app'))

            }
        }else{

            toast({
                title: 'Connect Your Wallet',
                status: 'warning',
                isClosable: true,
              })
        }
    }
    const ppHandler = (e) => {
        userInfoHandler("",{...userInfo,picture:e.target.value})

       
    }
    const nameHandler = (e) => {
        userInfoHandler("",{...userInfo,name:e.target.value})
    }
    return(
        <form onSubmit={initUser} style={{display:'flex', width:'100%', flexDirection:'column', gap:'1rem'}}>
            <Input isInvalid={nameEr} name='name' onChange={nameHandler} placeholder="Username"></Input>
            <Input isInvalid={pictureEr} name='pp'onChange={ppHandler} placeholder="Profile Picture (insert image url)"></Input>
            <Button type='submit' colorScheme='purple'>Initialize Profile !</Button>
            
        </form>
    )

}

export default LoginForm