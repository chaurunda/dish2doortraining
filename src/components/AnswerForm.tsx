import { Button, Grid, TextField } from '@mui/material'
import { FC } from 'react'
import { useFormik } from 'formik'
import SelectForm from './SelectForm'
import { List } from '@/types'

type AnswerFormProps = {
  handleSubmit: (values: any) => void
}

const AnswerForm: FC<AnswerFormProps> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      Marcolla: 'ring',
      Finch: 'ring',
      Natsiou: 'ring',
      Contee: 'ring',
      Winslow: 'ring',
    },
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })

  return (
    <Grid spacing={4} justifyContent="center" width="100%">
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {Object.keys(formik.values).map((value, index) => {
            return (
              <TextField
                select
                key={value + index}
                label={value}
                onChange={formik.handleChange}
                defaultValue=""
                id={value}
                SelectProps={{
                  native: true,
                }}
              >
                <SelectForm item={value} />
              </TextField>
            )
          })}
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  )
}

export default AnswerForm
