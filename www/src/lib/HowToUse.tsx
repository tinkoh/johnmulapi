import React from "react";
import {
  Container,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
  Box,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "@emotion-icons/bootstrap/Terminal";
import { Javascript, Python } from "emotion-icons/boxicons-logos";

import useView, { ViewEnum } from "./hooks/useView";
import CodeBlock from "./components/CodeBlock";

const HowToUse = () => {
  const { view } = useView();
  const show = view === ViewEnum.HOW_TO_USE;

  const codes = [
    `curl https://api.johnmulapi.givensuman.com/`,
    `fetch("https://api.johnmulapi.givensuman.com/")
  .then(res => res.json())
  .then(data => console.log(data))
`,
    `import requests
quote = (requests
  .get("https://api.johnmulapi.givensuman.com/")
  .json())
print(quote)
`,
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="How to Use"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <Container mt={16} w="100%" p={0}>
            <Heading size="md" userSelect="none">
              How do I use this?
            </Heading>
            <Tabs variant="enclosed-colored" mt="1em">
              <TabList>
                {[<Terminal />, <Javascript />, <Python />].map(
                  (icon, index) => (
                    <Tab ml={2} key={index}>
                      {React.cloneElement(icon, {
                        size: "1.25em",
                      })}
                    </Tab>
                  )
                )}
              </TabList>
              <TabPanels>
                {codes.map((code, index) => (
                  <TabPanel px={0} key={index}>
                    <Box>
                      <CodeBlock code={code} />
                    </Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
            <Divider my={6} />
            <Heading mt="1em" mb="0.5em" size="md" userSelect="none">
              Parameters
            </Heading>
            <TableContainer pb={1}>
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
            </TableContainer>
            <CodeBlock code="curl https://api.johnmulapi.givensuman.com/?quantity=3&maxLength=50" />
            <Divider my={6} />
            <Heading my="1em" size="md" userSelect="none">
              Can I use this?
            </Heading>
            <Text userSelect="none">Please do! Let me know how it goes.</Text>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HowToUse;
