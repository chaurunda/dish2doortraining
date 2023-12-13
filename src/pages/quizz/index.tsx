import { AppBar, Button, Grid, IconButton, Toolbar } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { deepEqual, getFormattedTime } from '@/utils/utils'
import { getLocalStorage, setLocalStorage } from '@/utils/handleLocalStorage'

import AnswerForm from '@/components/AnswerForm'
import { Box } from '@mui/system'
import { GetServerSidePropsContext } from 'next/types'
import Head from 'next/head'
import Image from 'next/image'
import { LOCALSTORAGENAME } from '@/constants'
import { List } from '@/types'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [localStorageValue, setLocalStorageValue] = useState<string | void | null>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formattedLocalStorageValue, setFormattedLocalStorageValue] = useState<Array<number>>()

  useEffect(() => {
    if (localStorageValue) {
      const localStorageSplitted = localStorageValue.split(',')
      const sortedArray = localStorageSplitted
        .map((value) => parseInt(value))
        .sort((a, b) => a - b)
        .slice(0, 4)
      setFormattedLocalStorageValue(sortedArray)
    }
  }, [localStorageValue])

  const handleSubmit = (values: any) => {
    if (!deepEqual(values, imageInfos.response)) {
      setIsModalOpen(true)
      if (!isSubmitted) {
        setLocalStorageValue(getLocalStorage(LOCALSTORAGENAME))
        setIsSubmitted(true)
      }
    }
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>Dishonored 2 Door Training - Quizz</title>
      </Head>
      <Grid container justifyContent="center" mt="1rem">
        <Grid item xl={7} textAlign="center">
          <Image src={imageInfos.url} alt="" width={400} height={415} />
        </Grid>
        <Grid item xl={7} xs={12}>
          <Box
            sx={{
              marginTop: 2,
            }}
          >
            <AnswerForm handleSubmit={handleSubmit} />
          </Box>
        </Grid>
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
            You made it
            {!!localStorageValue && (
              <>
                Here are the 5 best timer :
                <ol>
                  {formattedLocalStorageValue?.map((value) => (
                    <li key={value}>{getFormattedTime(value)}</li>
                  ))}
                </ol>
              </>
            )}
          </Typography>
        </Box>
      </Modal>
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
