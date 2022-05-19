import React from 'react'
import { 
    Container, Heading, List, ListItem, Box, useColorModeValue
} from '@chakra-ui/react'
import { css } from '@emotion/react'

import quotes from '../../quotes/quotes.min.json'

const QuoteList = () => {

    const itemBg = useColorModeValue("gray.200", "gray.400")

    return (
        <Container mt="2.5em">
            <Heading size="md">Quotes</Heading>
            <List 
                overflowY="scroll"
                maxH="15em"
                mt="1em"
                py="0.5em"
                px="0.25em"
                borderWidth={1}
                borderRadius="0.25em"
                css={css`
                &::-webkit-scrollbar {
                    width: 3px;
                }
                &::-webkit-scrollbar-track {
                    background-color: transparent;
                    width: 10px;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: lightgrey;
                    border-radius: 1px;
                    height: 50px;
                    outline: none;
                    background-clip: padding-box;
                }
                `}
            >
                {quotes.map((quote, index) => 
                <Box 
                    key={index}
                    my="0.25em"
                 >
                    <ListItem
                        borderRadius="0.25em"
                        fontWeight="semibold"
                        bgColor={index % 2 ? itemBg : "auto"}
                        color={index % 2 ? "blackAlpha.900" : "auto"}
                        p="0.5em"
                    >
                        {quote}
                    </ListItem>
                </Box>
                )}
            </List>
        </Container>
    )
}

export default QuoteList