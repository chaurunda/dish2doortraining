import { FC } from 'react'
import Timer from '../Timer/Timer'
import ControlButton from '../ControlButton/ControlButton'

type StopWatchProps = {
  isActive: boolean
  isPaused: boolean
  handleStart: () => void
  handlePauseResume: () => void
  handleReset: () => void
  time: number
}

const StopWatch: FC<StopWatchProps> = ({
  isActive,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset,
  time,
}) => {
  return (
    <div>
      <Timer time={time} />
      <ControlButton
        isActive={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  )
}

export default StopWatch
