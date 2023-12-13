import { Button, Grid, TextField } from '@mui/material'

import { FC } from 'react'
import SelectForm from './SelectForm'
import { useFormik } from 'formik'

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
    <Grid justifyContent="center" width="100%">
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
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
        <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 4 }}>
          Submit
        </Button>
      </form>
    </Grid>
  )
}

export default AnswerForm
