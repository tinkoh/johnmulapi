import React from 'react'
import {
    Container, Heading, Tabs, Tab, TabList, TabPanels, TabPanel, Code, Text, IconButton, Tooltip
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
          w={"20em"}
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
            Can I use this?
        </Heading>
        <Text userSelect="none">Please do! Let me know how it goes.</Text>
        </Container>
    )
}

export default HowToUse