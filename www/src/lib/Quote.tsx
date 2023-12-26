import React from "react"
import { Container as Container_, Text, Spinner, Center, useColorModeValue } from "@chakra-ui/react"
import type { ContainerProps } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

import CopyButton from "./components/CopyButton"
import useMulaneyQuote from "./hooks/useMulaneyQuote"

const Quote: React.FC<ContainerProps> = ({ ...props }) => {

    const { quote } = useMulaneyQuote()

    if (quote === null) {
        return (
            <Container {...props}>
                <Center>
                    <Spinner color="facebook.400" />
                </Center>
            </Container>
        )
    }

    return (
        <Container {...props}>
            <CopyButton text={quote} />
            <AnimatePresence>
                    <motion.div
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
            </AnimatePresence>
            <Text
                position="absolute"
                bottom={2}
                right={2}
                fontWeight="semibold"
                userSelect="none"
                opacity={0.75}
            >
            - John Mulaney
            </Text>

        </Container>
    )
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {

    const background = useColorModeValue("Background", "#1a202c")

    return (
        <Container_
            position="relative"
            p="1em"
            mb={2.5}
            borderRadius="0.25em"
            shadow="xl"
            borderWidth={2}
            w="100%"
            overflow="hidden"
            bgColor={background}
            {...props}
        >
            {children}
        </Container_>
    )
}

export default Quote