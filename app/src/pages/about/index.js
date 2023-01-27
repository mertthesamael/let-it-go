import Link from "next/link";

const { Flex, Text } = require("@chakra-ui/react")





const About = () => {



    return(
        <Flex w='100%' pos='relative' flexDir='column' zIndex={'2'} h='100%' paddingTop='12rem' gap='5rem'  align='center'>
            <Flex color='white'>
            <Text fontSize='4rem'>Sup bitch</Text>
            </Flex>
            <Flex color='white' w='70%'>
                <Text>Okay lets get serious for a minute. For some reason idk. Long story short, stay. I know shit can be so fucking hard and feels like fuckin hell, you need to stay. I'm not gonna say some bullshit like "Ohhhh life is amazing, the important thing is the way that you walking, life is the journey" blah blah. Life sucks. Hard. But you need to survive. This is the game. Just surive. Even if you are depressed as hell and do not want to made any fuckin move, just dont. You are ok as long as you are breathing. You'll get over it. I've fallen into grasp of depression so fuckin hard.  Trust me i know how this one feels. But if you just survive enough, you'll find a way to rebound and fuckin rise with the momentum of the fall. For me, it was coding and gym. You'll find yours if you just fuckin stay and wait.</Text>
            </Flex>
            <Flex color='white' w='70%'>
                <Text>Talk to people. It's okay to talk. Be cringe. Be hilarious. Don't afraid from being cringe. Trust me, if you feel like you'll be cringe with talking, you will not. People who can think this much can't be cringe even if he/she/x/y/z wants to.</Text>
            </Flex>
            <Flex color='white' w='70%'>
                <Text>This is the project that i made for Patika - Solana practicum. I've used and learned so much things in like 2 week and done this project. That's way it has so basic structure of program. Will upgrade it eventually for sure. But for now, do not keep it inside. Let it go !</Text>
            </Flex>
            <Flex color='white' w='70%'>
                <Link href='https://twitter.com/akaMerto' target={'_blank'}>
                <Text>Jan27,2023. Made by @merto.sol</Text>
                </Link>
            </Flex>
        </Flex>
    )
}

export default About;