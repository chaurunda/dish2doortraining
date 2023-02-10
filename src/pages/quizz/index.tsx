import AnswerForm from '@/components/AnswerForm'
import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next/types'
import { FC } from 'react'

type indexProps = {
  imageInfos: Record<string, string>
}

const index: FC<indexProps> = ({ imageInfos }) => {
  console.log(imageInfos)
  return (
    <>
      <Head>
        <title>Dishonored 2 Door Training - Quizz</title>
      </Head>
      <Container>
        <Image src={imageInfos.url} alt="" width={200} height={200} />
        <AnswerForm />
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
