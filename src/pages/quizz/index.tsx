import AnswerForm from '@/components/AnswerForm'
import { List } from '@/types'
import { Margin } from '@mui/icons-material'
import { Container } from '@mui/material'
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
      <Container>
        <Image src={imageInfos.url} alt="" width={804} height={834} style={{ margin: '0 auto' }} />
        <Box height="10vh" mr={4}>
          <AnswerForm response={imageInfos.response} />
        </Box>
      </Container>
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
