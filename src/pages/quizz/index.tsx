import AnswerForm from '@/components/AnswerForm'
import StopWatch from '@/components/Chrono/StopWatch/StopWatch'
import { List } from '@/types'
import { deepEqual, getFormattedTime } from '@/utils'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next/types'
import { FC, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

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
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(0)
  }

  const handleSubmit = (values: any) => {
    console.log(values, imageInfos.response)
    if (deepEqual(values, imageInfos.response)) {
      console.log('isoke')
      handlePauseResume()
      setIsModalOpen(true)
    }
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timer

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused])

  useEffect(() => {
    handleStart()
  }, [])

  return (
    <>
      <Head>
        <title>Dishonored 2 Door Training - Quizz</title>
      </Head>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
        <Grid item xs={12} sm={4} md={7}>
          <Image
            src={imageInfos.url}
            alt=""
            width={800}
            height={830}
            style={{ margin: '0 auto', width: 'auto', height: 'auto' }}
          />
        </Grid>
        <Grid item>
          <StopWatch
            isActive={isActive}
            isPaused={isPaused}
            handlePauseResume={handlePauseResume}
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
