import AnswerForm from '@/components/AnswerForm'
import StopWatch from '@/components/Chrono/StopWatch/StopWatch'
import { List } from '@/types'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next/types'
import { FC, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { getFormattedTime, deepEqual } from '@/utils/utils'

type indexProps = {
  imageInfos: {
    url: string
    response: List
  }
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Quizz: FC<indexProps> = ({ imageInfos }) => {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStart = () => {
    setIsActive(true)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(0)
  }

  const handleSubmit = (values: any) => {
    console.log(values, imageInfos.response)
    if (deepEqual(values, imageInfos.response)) {
      setIsModalOpen(true)
    }
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timer

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive])

  useEffect(() => {
    handleStart()
  }, [])

  return (
    <>
      <Head>
        <title>Dishonored 2 Door Training - Quizz</title>
      </Head>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
        <Grid item xs={12} md={7}>
          <Image
            src={imageInfos.url}
            alt=""
            width={800}
            height={830}
            style={{ margin: '0 auto', width: 'auto', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <StopWatch
            isActive={isActive}
            handleReset={handleReset}
            handleStart={handleStart}
            time={time}
          />
        </Grid>

        <Modal
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Congratulation you did it !
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You made it in {getFormattedTime(time)}
            </Typography>
          </Box>
        </Modal>
      </Grid>
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <AnswerForm handleSubmit={handleSubmit} />
      </Box>
    </>
  )
}

export default Quizz
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const host = context.req.headers.host
  const res = await fetch(`http://${host}/api/image`)
  const imageInfos = await res.json()
  return {
    props: { imageInfos },
  }
}
