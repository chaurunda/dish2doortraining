import { Container, CssBaseline } from '@mui/material'
import { Head, Html, Main, NextScript } from 'next/document'

import HeaderWithDrawer from '@/components/HeaderWithDrawer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <CssBaseline />
          <HeaderWithDrawer />
          <Main />
          <NextScript />
        </Container>
      </body>
    </Html>
  )
}
