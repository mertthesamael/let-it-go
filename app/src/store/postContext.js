
import * as anchor from "@project-serum/anchor"
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey, SystemProgram } from '@solana/web3.js'
import idl from "../config/idl.json"
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes'
import React,{ useEffect, useMemo, useState } from 'react'


const PostContext = React.createContext({
    emptyValue:''
})

export const PostContextWrapper = (props) => {
    const [user, setUser] = useState();
    const [initialized, setInitialized] = useState(false);
    const [posts, setPosts] = useState([])
    const [transactionPending, setTransactionPending] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [lastPostId, setLastPostId] = useState()
    const [userInfo, setUserInfo] = useState({name:'username',picture:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/solana-sol-icon.png'})
  
    const anchorWallet = useAnchorWallet();
    const { connection } = useConnection();
    const { publicKey } = useWallet()
    const PROGRAM_KEY = new PublicKey('J3fYWe4kFrRvyfp7d7Fr8wpvzMiUwwW4XYwM1LLneFzD')
    const program = useMemo(() => {
      if (anchorWallet) {
        const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())
        return new anchor.Program(idl, PROGRAM_KEY, provider)
      }
    }, [connection, anchorWallet])
  
    useEffect(() => {
      const start = async () => {
        if (program && publicKey) {
          try {
            const [userPda] = await findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
            const user = await program.account.userAccount.fetch(userPda)
            if (user) {
              setInitialized(true)
              setUser(user)
              setLastPostId(user.lastPostId)
              const postAccounts = await program.account.messageAccount.all(publicKey.toString())
              setPosts(postAccounts)
              setUserInfo({name:user.name,picture:user.avatar,posted:user.messageCount})
            }
          } catch (error) {
            console.log(error)
            setInitialized(false)
          }
        }
      }
     
  
      start()
      if(initialized){
        setUserInfo({name:user?.name,picture:user?.avatar,posted:user?.messageCount})
      }
  
    }, [program, publicKey, transactionPending]);
  
  
    const initUser = async (name,avatar) => {
      if (program && publicKey) {
        try {
          setTransactionPending(true)
          const [userPda] = findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
          
          await program.methods
          .initUser(userInfo.name, userInfo.picture)
          .accounts({
            userAccount: userPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
          console.log('test')
          setInitialized(true)
        } catch (error) {
          console.log(error)
        } finally {
          setTransactionPending(false)
        }
      }
    }
  
    const createPost = async (val) => {
      if (program && publicKey) {
        setTransactionPending(true)
        try {
          const [userPda] = findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
          const [postPda] = findProgramAddressSync([utf8.encode('message'), publicKey.toBuffer(), Uint8Array.from([lastPostId])], program.programId)
          console.log(program.methods)
          await program.methods
            .newMessage(val)
            .accounts({
              userAccount: userPda,
              messageAccount: postPda,
              authority: publicKey,
              systemProgram: SystemProgram.programId,
            })
            .rpc()
          setShowModal(false)
        } catch (error) {
          console.error(error)
        } finally {
          setTransactionPending(false)
        }
      }
    }

    const userInfoHandler = (key,value) => {
      setUserInfo(value)
    }
    return(
        <PostContext.Provider value={{
            post:posts,
            create:createPost,
            init:initUser,
            userInfo:userInfo,
            userInfoHandler:userInfoHandler,
            isInitialized:initialized,
            
            }}>

            {props.children}

        </PostContext.Provider>
    )

}

export {PostContext}



