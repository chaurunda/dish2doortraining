import { getTimeInMinutes, getTimeInSeconds, getTimeInMilliseconds } from '@/utils/utils'
import { CSSProperties, FC } from 'react'

type TimerProps = {
  time: number
}

const Timer: FC<TimerProps> = ({ time }) => {
  const digitStyles: CSSProperties = {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    fontSize: '2rem',
  }
  return (
    <p
      style={{
        margin: '3rem 0',
        width: '100%',
        display: 'flex',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span style={digitStyles}>{getTimeInMinutes(time)}:</span>
      <span style={digitStyles}>{getTimeInSeconds(time)}.</span>
      <span style={{ ...digitStyles, color: '#e42a2a' }}>{getTimeInMilliseconds(time)}</span>
    </p>
  )
}

export default Timer
