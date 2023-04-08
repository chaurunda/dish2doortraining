import { FC } from 'react'
import Timer from '../Timer/Timer'
import ControlButton from '../ControlButton/ControlButton'

type StopWatchProps = {
  isActive: boolean
  handleStart: () => void
  handleReset: () => void
  time: number
}

const StopWatch: FC<StopWatchProps> = ({ isActive, handleStart, handleReset, time }) => {
  return (
    <div>
      <Timer time={time} />
      <ControlButton isActive={isActive} handleStart={handleStart} handleReset={handleReset} />
    </div>
  )
}

export default StopWatch
