import { Container } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container maxWidth="lg" style={{ padding: 0 }}>
          <Main />
          <NextScript />
        </Container>
      </body>
    </Html>
  )
}
