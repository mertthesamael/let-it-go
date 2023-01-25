const { Flex } = require("@chakra-ui/react")
import styles from "@/layouts/BackgroundWrapper/backgroundWrapper.module.scss"



const BackgroundWrapper = ({children}) => {


    return(
        <Flex w='100vw' background='rgba(14, 13, 13, 0.219)' justify='center' h='100vh'
        boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
        backdropFilter='blur(25px)'
        >
            {children}
        </Flex>
    )
}

export default BackgroundWrapper;