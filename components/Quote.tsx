import React from "react"
import { Container, Text, Spinner, Center, Alert, AlertIcon } from "@chakra-ui/react"
import type { ContainerProps } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

const Quote: React.FC<{
    quote?: string,
    isLoading: boolean,
    isError: boolean
} & ContainerProps> = ({ 
    quote, 
    isLoading,
    isError,
    ...props 
}) => {

    if (isLoading) {
        return (
            <Wrapper {...props}>
                <Center>
                    <Spinner 
                        mx="auto" 
                        color="facebook.400" 
                    />
                </Center>
            </Wrapper>
        )   
    }

    if (isError) {
        return (
            <Wrapper {...props}>
                <Center>
                    <Alert 
                        status="error"
                        borderRadius={4}
                    >
                        <AlertIcon />
                        Something went wrong. Try again later!
                    </Alert>
                </Center>
            </Wrapper>
        )
    }

    return (
        <Wrapper {...props}>
            <AnimatePresence>
                {quote  &&
                    <motion.div
                        key={quote}
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        exit={{ x: 1000, position: "absolute", opacity: 0 }}
                    >
                        <Text
                            fontSize="lg"
                            fontWeight="bold"
                            mb={5}
                        >
                            {quote}
                        </Text>
                    </motion.div> 
                }
            </AnimatePresence>
            <Text
                position="absolute"
                bottom={2}
                right={2}
                fontWeight="semibold"
                userSelect="none"
            >
            - John Mulaney
            </Text>
        </Wrapper>
    )
}

const Wrapper: React.FC<ContainerProps> = (props) => {
    return (
        <Container
            position="relative"
            p="1em"
            mb={2.5}
            borderRadius="0.25em"
            shadow="xl"
            borderWidth={2}
            w="100%"
            overflow="hidden"
            {...props}
        >
            {props.children}
        </Container>
    )
}

export default Quote