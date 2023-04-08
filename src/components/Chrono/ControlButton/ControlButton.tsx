import { Button } from '@mui/material'
import { FC } from 'react'

type ControlButtonProps = {
  isActive: boolean
  handleStart: () => void
  handleReset: () => void
}

const ControlButton: FC<ControlButtonProps> = ({ isActive, handleStart, handleReset }) => {
  const StartButton = (
    <Button variant="contained" onClick={handleStart}>
      Start
    </Button>
  )
  const ActiveButtons = (
    <Button variant="contained" onClick={handleReset}>
      Reset
    </Button>
  )

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isActive ? ActiveButtons : StartButton}
      </div>
    </div>
  )
}

export default ControlButton
