import React from 'react'
import {
    Container, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Code, Text, IconButton, Tooltip, Table, Thead, Tbody, Tr, Th, Td, TableContainer
} from '@chakra-ui/react'
import { HiTerminal } from 'react-icons/hi'
import { FaJsSquare, FaPython } from 'react-icons/fa'
import { IoCopyOutline } from 'react-icons/io5'

const HowToUse = () => {

    const codes = [
`curl https://johnmulapi.com/api`,
`fetch('https://johnmulapi.com/api')
  .then(res => res.json())
  .then(data => console.log(data))
`,
`import requests
quote = (requests
.get('https://johnmulapi.com/api')
.json())
print(quote)
`
    ]

    const copy = async (text: string) => 
      await navigator.clipboard.writeText(text)

    return (
        <Container mt="2.5em" w="100%">

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
            {codes.map((code, index) => 
            <TabPanel px={0} key={index}>
              <Code
                display="block"
                whiteSpace="pre"
                p="0.5em"
                borderRadius="0.25em"
                fontWeight="semibold"
                position="relative"
              >
                <Tooltip label="Copy">
                <IconButton 
                  aria-label="Copy"
                  icon={<IoCopyOutline />}
                  position="absolute"
                  right="0" top="0"
                  variant="link"
                  py="0.5em"
                  onClick={() => copy(code)}
                />
                </Tooltip>
                <Text>
                  {code}
                </Text>
              </Code>
              </TabPanel>
              )}
          </TabPanels>
        </Tabs>

        <Heading
          mt="1em"
          mb="0.5em"
          size="md"
          userSelect="none"
        >
          Parameters
        </Heading>
        <TableContainer>
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
            mt="1em"
            p="0.5em"
            borderRadius="0.25em"
            display="block"
            whiteSpace="pre"
            fontWeight={"semibold"}
          >
            <Text color="gray.500"># example usage</Text>
            <Text>curl https://johnmulapi.com/api?quantity=3&maxLength=50</Text>
          </Code>
        </TableContainer>

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
