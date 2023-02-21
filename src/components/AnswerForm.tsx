import { Button, Grid, TextField } from '@mui/material'
import { FC } from 'react'
import { useFormik } from 'formik'
import SelectForm from './SelectForm'
import { List } from '@/types'

type AnswerFormProps = {
  response: List
}

function deepEqual(object1: any, object2: any) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false
    }
  }
  return true
}
function isObject(object: any) {
  return object != null && typeof object === 'object'
}

const AnswerForm: FC<AnswerFormProps> = ({ response }) => {
  const formik = useFormik({
    initialValues: {
      Marcolla: 'ring',
      Finch: 'ring',
      Natsiou: 'ring',
      Contee: 'ring',
      Winslow: 'ring',
    },
    onSubmit: (values) => {
      if (deepEqual(values, response)) {
        alert('DONE')
      } else {
        console.log(false)
      }
    },
  })
  return (
    <Grid container spacing={4} justifyContent="center" width="100%">
      <form onSubmit={formik.handleSubmit}>
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

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  )
}

export default AnswerForm
