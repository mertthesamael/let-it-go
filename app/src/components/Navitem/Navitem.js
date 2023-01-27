import { useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const { Text, Flex } = require("@chakra-ui/react")
const { default: Link } = require("next/link")





const Navitem = ({text,target}) => {



    return(
        <Link href={target}>
        <Text color='white' fontWeight='bolder' fontSize={['0.8rem','1rem','1.3rem']}>  
            {text}  
        </Text>
        </Link>
    )

}


export default Navitem;