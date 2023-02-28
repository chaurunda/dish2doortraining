import AnswerForm from '@/components/AnswerForm'
import { List } from '@/types'
import { Margin } from '@mui/icons-material'
import { Container, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next/types'
import { FC } from 'react'

type indexProps = {
  imageInfos: {
    url: string
    response: List
  }
}

const index: FC<indexProps> = ({ imageInfos }) => {
  return (
    <>
      <Head>
        <title>Dishonored 2 Door Training - Quizz</title>
      </Head>
      <Container sx={{ display: 'flex' }}>
        <Grid item xs={false} sm={4} md={7}>
          <Image
            src={imageInfos.url}
            alt=""
            width={804}
            height={834}
            style={{ margin: '0 auto', maxHeight: '75vh', width: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={5}>
          Here come the timer
        </Grid>
      </Container>
      <Box
        mr={4}
        sx={{
          marginTop: 8,
        }}
      >
        <AnswerForm response={imageInfos.response} />
      </Box>
    </>
  )
}

export default index
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const host = context.req.headers.host
  const res = await fetch(`http://${host}/api/image`)
  const imageInfos = await res.json()
  return {
    props: { imageInfos },
  }
}
