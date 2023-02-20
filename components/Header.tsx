import React from "react"
import { VStack, Heading, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <VStack userSelect="none">
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