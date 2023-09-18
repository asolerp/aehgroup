'use client'

import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
}

const renderTime = (dimension: string, time: number) => {
  return (
    <div className="flex flex-col items-center">
      <div className="time">
        <p className="fonst-sans text-3xl">{time}</p>
      </div>
      <div>
        <p className="fonst-sans text-xl">{dimension}</p>
      </div>
    </div>
  )
}

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0
const getTimeDays = (time: number) => (time / daySeconds) | 0

export const CountDown = () => {
  const stratTime = Date.now() / 1000 // use UNIX timestamp in seconds
  const endTime = 1697320800 // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime
  const days = Math.ceil(remainingTime / daySeconds)
  const daysDuration = days * daySeconds

  return (
    <div className="flex flex-row flex-wrap px-6 justify-center space-x-2 space-y-2 lg:space-x-12 lg:flex-nowrap lg:px-0">
      <CountdownCircleTimer
        {...timerProps}
        colors="#84A095"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime('días', getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#84A095"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime('horas', getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#84A095"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime('minutos', getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#84A095"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime('segundos', getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  )
}
