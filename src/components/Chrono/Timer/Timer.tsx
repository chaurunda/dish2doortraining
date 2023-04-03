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
      <span style={digitStyles}>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span style={digitStyles}>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
      <span style={{ ...digitStyles, color: '#e42a2a' }}>
        {('0' + ((time / 10) % 100)).slice(-2)}
      </span>
    </p>
  )
}

export default Timer
