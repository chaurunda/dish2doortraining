import { ThemeProvider, createTheme } from '@mui/material'

import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline/'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({})
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
