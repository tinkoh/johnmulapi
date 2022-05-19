import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

import favicon from '../assets/mulaney.ico'
import metaImage from '../assets/mulaney.png'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>johnmulapi</title>
      <link rel="icon" type="image/x-icon" href={favicon.src}></link>

      <meta name="title" content="johnmulapi" />
      <meta name="description" content="An API for John Mulaney quotes." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://johnmulapi.com/" />
      <meta property="og:title" content="johnmulapi" />
      <meta property="og:description" content="An API for John Mulaney quotes." />
      <meta property="og:image" content={metaImage.src} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://johnmulapi.com/" />
      <meta property="twitter:title" content="johnmulapi" />
      <meta property="twitter:description" content="An API for John Mulaney quotes." />
      <meta property="twitter:image" content={metaImage.src} />
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
