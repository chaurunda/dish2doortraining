import { FC } from 'react'

type SelectFormProps = {
  item: string
}

const SelectForm: FC<SelectFormProps> = ({ item }) => {
  return (
    <>
      <option value="ring">Ring</option>
      <option value="diamond">Diamond</option>
      <option value="bird pendant">Bird Pendant</option>
      <option value="snuff tin">Snuff Tin</option>
      <option value="war medal">War Medal</option>
    </>
  )
}

export default SelectForm
