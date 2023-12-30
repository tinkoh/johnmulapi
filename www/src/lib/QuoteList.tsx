import { useMemo, useState } from "react";
import {
  Container,
  Heading,
  List,
  ListItem,
  Box,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";

import quotes_ from "../../../quotes/quotes.min.json";
import useView, { ViewEnum } from "./hooks/useView";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";

const QuoteList = () => {
  const { view } = useView();
  const show = view === ViewEnum.QUOTE_LIST;

  const itemBg = useColorModeValue("facebook.100", "facebook.900");

  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const fuzzyfinder = useMemo(
    () =>
      new Fuse(quotes_, {
        findAllMatches: true,
        shouldSort: true,
        ignoreLocation: true,
      } as any),
    []
  );

  const search = fuzzyfinder.search(input);
  const quotes = search.length > 0 ? search.map(({ item }) => item) : quotes_;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="Quote List"
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: "2em" }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
        >
          <Container p={0}>
            <Heading size="md">Quotes</Heading>
            <Input
              placeholder="Search for a quote..."
              onChange={handleInput}
              my={2}
              _placeholder={{
                color: "inherit",
              }}
            />
            <List
              overflowY="scroll"
              h={250}
              py="0.5em"
              px="0.25em"
              borderWidth={2}
              borderRadius="0.25em"
            >
              {quotes.map((quote, index) => (
                <Box key={index} my="0.25em">
                  <ListItem
                    borderRadius="0.25em"
                    fontWeight="semibold"
                    bgColor={index % 2 ? itemBg : "auto"}
                    p="0.5em"
                  >
                    {quote}
                  </ListItem>
                </Box>
              ))}
            </List>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteList;
