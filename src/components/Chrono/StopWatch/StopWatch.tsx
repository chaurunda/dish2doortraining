import { FC, useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import ControlButton from '../ControlButton/ControlButton'

type StopWatchProps = {}

const StopWatch: FC<StopWatchProps> = () => {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timer

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused])

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(0)
  }

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
