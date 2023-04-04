import { Button } from '@mui/material'
import { FC } from 'react'

type ControlButtonProps = {
  isActive: boolean
  isPaused: boolean
  handleStart: () => void
  handlePauseResume: () => void
  handleReset: () => void
}

const ControlButton: FC<ControlButtonProps> = ({
  isActive,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset,
}) => {
  const StartButton = (
    <Button variant="contained" onClick={handleStart}>
      Start
    </Button>
  )
  const ActiveButtons = (
    <div>
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
      <Button variant="contained" onClick={handlePauseResume}>
        {isPaused ? 'Resume' : 'Pause'}
      </Button>
    </div>
  )

  return (
    <div>
      <div>{isActive ? ActiveButtons : StartButton}</div>
    </div>
  )
}

export default ControlButton
