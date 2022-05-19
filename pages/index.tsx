import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { 
  Box, Center, Container, Image, HStack, IconButton, Tooltip 
} from '@chakra-ui/react'
import { HiQuestionMarkCircle, HiRefresh } from 'react-icons/hi'
import { MdOutlineFormatListBulleted } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'

import Toolbar from './components/Toolbar'
import Header from './components/Header'
import Quote from './components/Quote'
import HowToUse from './components/HowToUse'
import QuoteList from './components/QuoteList'
import Footer from './components/Footer'

import mulaneyImage from '../assets/mulaney.png'

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
  const [ quote, setQuote ] = useState("")
  const getQuote = async () => {
    await fetch('/api')
      .then(res => res.json())
      .then(data => setQuote(data.data))
  }
  useEffect(() => { getQuote() }, [])

  return (
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
              icon={<MdOutlineFormatListBulleted />}
              onClick={toggleShowQuotes}
            />
          </Tooltip>
          <Tooltip label="Refresh">
          <IconButton
            variant="ghost"
            fontSize="xl"
            borderRadius="50%"
            aria-label="Refresh"
            icon={<HiRefresh />}
            onClick={getQuote}
          />
          </Tooltip>
        </HStack>
      </Center>

      <Quote quote={quote} />

      <AnimatePresence>

      {showHowTo && 
        <motion.div
          key="howtouse"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ height: 0, visibility: "hidden" }}
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

      <Image
        src={mulaneyImage.src}
        alt="John Mulaney"
        mt="1em"
        mx="auto"
      />

      <Footer />

      </Container>

    </Box>
  )
}

export default Home
