import { ChakraProvider } from "@chakra-ui/react"

import Heading from "./lib/Heading"
import Image from "./lib/Image"
import Controls from "./lib/Controls"
import Quote from "./lib/Quote"
import Toolbar from "./lib/Toolbar"
import MouseFollow from "./lib/components/MouseFollow"
import Wrapper from "./lib/components/Wrapper"
import Footer from "./lib/Footer"
import { MulaneyQuoteProvider } from "./lib/hooks/useMulaneyQuote"

function App() {

  return (
    <ChakraProvider>
    <MulaneyQuoteProvider>
    <Wrapper>
      <Toolbar />
      <Heading />
      <Controls />
      <Quote />
      <Image />
      <Footer />
      {/* <MouseFollow /> */}
    </Wrapper>
    </MulaneyQuoteProvider>
    </ChakraProvider>
  )
}

export default App
