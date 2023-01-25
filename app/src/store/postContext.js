
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
  
    const anchorWallet = useAnchorWallet();
    const { connection } = useConnection();
    const { publicKey } = useWallet()
    const PROGRAM_KEY = new PublicKey('Dz1ZZ3k4Q5iUVguPUydRxbVfQpZ8BnQ17faf1JqRMJFq')
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
            }
          } catch (error) {
            console.log(error)
            setInitialized(false)
          }
        }
      }
      console.log(posts)
  
      start()
  
    }, [program, publicKey, transactionPending]);
  
  
    const initUser = async () => {
      if (program && publicKey) {
        try {
          setTransactionPending(true)
          const [userPda] = findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
          const name = "Mert";
          const avatar = "test";
        
          console.log(program.methods.initUser(name, avatar))
          await program.methods
          .initUser(name, avatar)
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
  
    const createPost = async () => {
      if (program && publicKey) {
        setTransactionPending(true)
        try {
          const [userPda] = findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
          const [postPda] = findProgramAddressSync([utf8.encode('message'), publicKey.toBuffer(), Uint8Array.from([lastPostId])], program.programId)
  
          await program.methods
            .newMessage("Third Message")
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

    return(
        <PostContext.Provider value={{
            post:posts
            }}>

            {props.children}

        </PostContext.Provider>
    )

}

export {PostContext}



