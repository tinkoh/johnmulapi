import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../styles/theme";

import Heading from "./lib/Heading";
import Image from "./lib/Image";
import Controls from "./lib/Controls";
import Quote from "./lib/Quote";
import Toolbar from "./lib/Toolbar";
import MouseFollow from "./lib/components/MouseFollow";
import Wrapper from "./lib/components/Wrapper";
import Footer from "./lib/Footer";
import QuoteList from "./lib/QuoteList";
import HowToUse from "./lib/HowToUse";
import Contexts from "./lib/hooks/Contexts";

function App() {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Contexts>
        <Wrapper>
          <Toolbar />
          <Heading />
          <Controls />
          <Quote />
          <QuoteList />
          <HowToUse />
          <Image />
          <Footer />
          <MouseFollow />
        </Wrapper>
      </Contexts>
    </ChakraProvider>
  );
}

export default App;
