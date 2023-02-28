import type { AppProps } from 'next/app'

import GlobalStyle from '@/styles/globals'
import theme from '@/styles/theme'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { inter } from './fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Prive | Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main className={inter.className}>
          <Component {...pageProps} />
          <GlobalStyle />
        </main>
      </ThemeProvider>
    </>
  )
}
