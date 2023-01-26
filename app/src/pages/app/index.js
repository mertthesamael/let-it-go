const { default: WalletMultiButtonDynamic } = require("@/components/WalletMultiButtonDynamic/WalletMultiButtonDynamic")
const { Flex } = require("@chakra-ui/react")





const App = () => {



    return(
        <Flex w='100%' h='100%' align='center'>
            <WalletMultiButtonDynamic></WalletMultiButtonDynamic>
        </Flex>
    )
}

export default App