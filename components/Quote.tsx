import React from 'react'
import { Container, Text, Spinner, Center } from '@chakra-ui/react'

const Quote = ({ quote }: { quote: string }) => {
    return (
        <Container
            position="relative"
            p="1em"
            mb={2.5}
            borderRadius="0.25em"
            shadow="xl"
            borderWidth={2}
            w="100%"
        >
        {quote.length > 0 ? <>
        <Text
            fontSize="lg"
            fontWeight="bold"
            mb={5}
        >
        {quote}
        </Text>

        <Text
            position="absolute"
            bottom={2}
            right={2}
            fontWeight="semibold"
            userSelect="none"
        >
        - John Mulaney
        </Text>
        </> : 
        <Center>
            <Spinner mx="auto" color="facebook.400" />
        </Center>
        }
        </Container>
    )
}

export default Quote