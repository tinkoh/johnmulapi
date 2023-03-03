import React from "react"
import {
    Container, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Code, Text, IconButton, Tooltip, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Divider, Box
} from "@chakra-ui/react"
import { useColorModeValue, useToast } from "@chakra-ui/react"
import { HiTerminal } from "react-icons/hi"
import { FaJsSquare, FaPython, FaRegCopy } from "react-icons/fa"
import { horizontalScrollbar } from "../styles/scrollbar"

const HowToUse = () => {

    const codes = [
`curl https://johnmulapi.com/api`,
`fetch("https://johnmulapi.com/api")
  .then(res => res.json())
  .then(data => console.log(data))
`,
`import requests
quote = (requests
  .get("https://johnmulapi.com/api")
  .json())
print(quote)
`
    ]    
    
    const copyButtonBackground = useColorModeValue("gray.200", "gray.600")
    const toast = useToast()

    const copy = async (text: string) => {
      await navigator.clipboard.writeText(text)
        .then(() => {
          toast({
            title: "Copied to clipboard!",
            isClosable: true,
            duration: 3000,
          })
        })
        .catch(() => {
          toast({
            title: "Failed to copy to clipboard.",
            isClosable: true,
            duration: 3000,
            status: "error"
          })
        })
    }

    return (
        <Container 
          mt={16} 
          w="100%" 
          maxW="95vw"
        >
          <Heading 
              size="md"
              userSelect="none"
          >
              How do I use this?
          </Heading>
          <Tabs
            variant="enclosed"
            mt="1em"
          >
            <TabList>
              <Tab fontSize="xl"><HiTerminal /></Tab>
              <Tab fontSize="lg"><FaJsSquare /></Tab>
              <Tab fontSize="lg"><FaPython /></Tab>
            </TabList>
            <TabPanels>
              {codes.map((code, index) => (
                <TabPanel px={0} key={index}>
                  <Box
                    overflowX={["scroll", "hidden"]}
                    css={horizontalScrollbar}
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p="1em"
                      pr="3em"
                      borderRadius="0.25em"
                      fontWeight="semibold"
                      position="relative"
                      minWidth="fit-content"
                    >
                      <Tooltip label="Copy">
                      <IconButton 
                        aria-label="Copy"
                        icon={<FaRegCopy />}
                        position="absolute"
                        right="0" top="0"
                        mt="0.25em" mr="0.25em"
                        variant="link"
                        py={1}
                        _focus={{
                          boxShadow: "none",
                          backgroundColor: copyButtonBackground
                        }}
                        onClick={() => copy(code)}
                      />
                      </Tooltip>
                      <Text>
                        {code}
                      </Text>
                    </Code>
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          <Divider my={6} />
          <Heading
            mt="1em"
            mb="0.5em"
            size="md"
            userSelect="none"
          >
            Parameters
          </Heading>
          <TableContainer
            css={horizontalScrollbar}
            pb={1}
          >
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Type</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>quantity</Td>
                  <Td>number</Td>
                  <Td>Number of quotes to return</Td>
                </Tr>
                <Tr>
                  <Td>maxLength</Td>
                  <Td>number</Td>
                  <Td>Maximum length of quote(s)</Td>
                </Tr>
                <Tr>
                  <Td>minLength</Td>
                  <Td>number</Td>
                  <Td>Minimum length of quote(s)</Td>
                </Tr>
              </Tbody>
            </Table>
            <Code
              width="100%"
              minWidth="fit-content"
              mt="1em"
              p="1em"
              pr={["2.5em", "2.5em", "0.5em"]}
              borderRadius="0.25em"
              display="block"
              whiteSpace="pre"
              fontWeight="semibold"
            >
              <Text color="gray.500">
                # example usage
              </Text>
              <Text>
                curl https://johnmulapi.com/api?quantity=3&maxLength=50
              </Text>
            </Code>
          </TableContainer>
          <Divider my={6} />
          <Heading
              my="1em"
              size="md"
              userSelect="none"
          >
              Can I use this?
          </Heading>
          <Text userSelect="none">Please do! Let me know how it goes.</Text>
        </Container>
    )
}

export default HowToUse
