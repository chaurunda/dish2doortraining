import { Container } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container maxWidth="lg">
          <Main />
          <NextScript />
        </Container>
      </body>
    </Html>
  )
}
