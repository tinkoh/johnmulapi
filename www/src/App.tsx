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
import { ViewProvider } from "./lib/hooks/useView"

function App() {
  return (
    <ChakraProvider>
    <MulaneyQuoteProvider>
    <ViewProvider>
    <Wrapper>
      <Toolbar />
      <Heading />
      <Controls />
      <Quote />
      <Image />
      <Footer />
      <MouseFollow />
    </Wrapper>
    </ViewProvider>
    </MulaneyQuoteProvider>
    </ChakraProvider>
  )
}

export default App
