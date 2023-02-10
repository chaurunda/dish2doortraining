import { itemValue } from '@/types'
import { Select, MenuItem, SelectChangeEvent, FormControl } from '@mui/material'
import { FC, useState } from 'react'

type SelectFormProps = {}

const SelectForm: FC<SelectFormProps> = () => {
  const [item, setItem] = useState<itemValue>('ring')

  const handleChange = (event: SelectChangeEvent<itemValue>) => {
    setItem(event.target.value as itemValue)
  }

  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={item}
        onChange={handleChange}
      >
        <MenuItem value="ring">Ring</MenuItem>
        <MenuItem value="diamond">Diamond</MenuItem>
        <MenuItem value="bird pendant">Bird Pendant</MenuItem>
        <MenuItem value="snuff tin">Snuff Tin</MenuItem>
        <MenuItem value="war medal">War Medal</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectForm
