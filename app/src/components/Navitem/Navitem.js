const { Text } = require("@chakra-ui/react")
const { default: Link } = require("next/link")





const Navitem = ({text,target}) => {


    return(
        <Link href={target}>
        <Text color='white' fontWeight='bolder' fontSize='1.3rem'>  
            {text}  
        </Text>
        </Link>
    )

}


export default Navitem;