import { Button, Grid } from '@mui/material'
import { FC, FormEvent } from 'react'
import RawForm from './RawForm'

type AnswerFormProps = {}

const AnswerForm: FC<AnswerFormProps> = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(event.target)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={5}>
        <RawForm name="Marcolla" />
        <RawForm name="Finch" />
        <RawForm name="Natsiou" />
        <RawForm name="Contee" />
        <RawForm name="Winslow" />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </Grid>
    </form>
  )
}

export default AnswerForm
