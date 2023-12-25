import { useState, useEffect } from "react"
import type { NextPage } from "next"
import { 
  Box, Center, Container, HStack, IconButton, Tooltip 
} from "@chakra-ui/react"
import { HiQuestionMarkCircle, HiRefresh } from "react-icons/hi"
import { FaListUl, FaTwitter } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { useQuery } from "react-query"

import Toolbar from "../components/Toolbar"
import Header from "../components/Header"
import Quote from "../components/Quote"
import HowToUse from "../components/HowToUse"
import QuoteList from "../components/QuoteList"
import Image from "../components/Image"
import Footer from "../components/Footer"
import MouseFollow from "../components/MouseFollow"

const Home: NextPage = () => {

  const [ showHowTo, setShowHowTo ] = useState(false)
  const toggleHowTo = () => {
    setShowQuotes(false)
    setShowHowTo(state => !state)
  }
  const [ showQuotes, setShowQuotes ] = useState(false)
  const toggleShowQuotes = () => {
    setShowHowTo(false)
    setShowQuotes(state => !state)
  }

  const { data: quote, isLoading, isFetching, isError, refetch } = useQuery<{
    data: string
  }>("Fetch Quote", async () => {
    return await fetch("/api")
      .then(async res => await res.json())
  }, {
    refetchOnWindowFocus: false
  })

  const handleRefetch = async () => await refetch()

  const openTweet = () => { 
    if (quote?.data) {
      const param = encodeURI(quote?.data) + "%0A" + encodeURI(`- John Mulaney (https://johnmulapi.com)`)
      window.open(`https://twitter.com/intent/tweet?text=${param}`)
    }
  }

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <>
    <Box
      minW="100%"
      minH="100vh"
    >
      <Toolbar />
      <Container
        mx="auto"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Header />
        <Center>
          <HStack my={2.5}>
            <Tooltip label="How To Use">
            <IconButton
              isActive={showHowTo}
              variant="ghost"
              fontSize="xl"
              borderRadius="50%"
              aria-label="How To Use"
              icon={<HiQuestionMarkCircle />}
              onClick={toggleHowTo}
            />
            </Tooltip>
            <Tooltip label="View Quotes">
              <IconButton
                isActive={showQuotes}
                variant="ghost"
                fontSize="xl"
                borderRadius="50%"
                aria-label="View Quotes"
                icon={<FaListUl />}
                onClick={toggleShowQuotes}
              />
            </Tooltip>
            <Tooltip label="Share On Twitter">
            <IconButton
              variant="ghost"
              aria-label="Share On Twitter"
              fontSize="xl"
              borderRadius="50%"
              isDisabled={!quote?.data}
              icon={<FaTwitter />}
              onClick={openTweet}
            />
            </Tooltip>
            <Tooltip label="Refresh">
            <IconButton
              variant="ghost"
              fontSize="xl"
              borderRadius="50%"
              aria-label="Refresh"
              icon={<HiRefresh />}
              onClick={handleRefetch}
              as="button"
            />
            </Tooltip>
          </HStack>
        </Center>
        <Quote 
          quote={quote?.data} 
          isLoading={isLoading || isFetching}
          isError={isError}
        />
        <AnimatePresence>
        {showHowTo && 
          <motion.div
            key="howtouse"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ height: 0, visibility: "hidden" }}
            transition={{ duration: 0.25 }}
          >
            <HowToUse />
          </motion.div>
        }
        {showQuotes &&
          <motion.div
            key="quotes"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ height: 0, visibility: "hidden" }}
          >
            <QuoteList />
          </motion.div>
        }
        </AnimatePresence>
        {/* eslint-disable-next-line */}
        <Image />
        <Footer />
      </Container>
    </Box>
    <Box
      h="100%"
      w="100%"
      overflow="hidden"
      position="absolute"
      top={0}
      left={0}
      zIndex={-10}
    >
      <MouseFollow />
    </Box>
    </>
  )
}

export default Home
