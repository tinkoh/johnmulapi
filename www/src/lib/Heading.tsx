import { VStack, Heading, Text } from "@chakra-ui/react"
import useMulaneyQuote from "./hooks/useMulaneyQuote"

const Header = () => {

    // const { fetch, delayedFetch } = useMulaneyQuote()

    return (
        <VStack userSelect="none" mt={24}>
            <Heading 
                size="3xl"
                userSelect="none"
                display="flex"
                flexDir="row"
            >
            <Text>
                johnmul
            </Text>
            <Text color="facebook.400">
                api
            </Text>
            </Heading>
            <Heading size="md">
                An API for John Mulaney quotes
            </Heading>
        </VStack>
    )
}

export default Header