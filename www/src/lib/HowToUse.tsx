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
            <Tabs variant="enclosed-colored" mt={6}>
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
            <Heading mt={12} size="md" userSelect="none">
              Parameters
            </Heading>
            <TableContainer pb={1} mt={6}>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Type</Th>
                    <Th>Default</Th>
                    <Th>Description</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>quantity</Td>
                    <Td>number</Td>
                    <Td>1</Td>
                    <Td>Number of quotes to return</Td>
                  </Tr>
                  <Tr>
                    <Td>maxLength</Td>
                    <Td>number</Td>
                    <Td>undefined</Td>
                    <Td>Maximum length of quotes to return</Td>
                  </Tr>
                  <Tr>
                    <Td>minLength</Td>
                    <Td>number</Td>
                    <Td>undefined</Td>
                    <Td>Minimum length of quotes to return</Td>
                  </Tr>
                  <Tr>
                    <Td>unique</Td>
                    <Td>boolean</Td>
                    <Td>false</Td>
                    <Td>
                      Whether the returned quotes (if multiple) must be unique
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <CodeBlock
              code="curl 'https://api.johnmulapi.givensuman.com/?quantity=3&maxLength=50'"
              mt={6}
            />
            <Heading mt={12} mb={2} size="md" userSelect="none">
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
