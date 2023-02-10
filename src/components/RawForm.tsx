import { Name } from '@/types'
import { Typography } from '@mui/material'
import { FC } from 'react'
import SelectForm from './SelectForm'

type RawFormProps = {
  name: Name
}

const RawForm: FC<RawFormProps> = ({ name }) => {
  return (
    <>
      <Typography>{name}</Typography>
      <SelectForm />
    </>
  )
}

export default RawForm
