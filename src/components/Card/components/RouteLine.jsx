import React from 'react'
import classes from '../Card.module.scss'

const RouteLine = React.memo(({ origin, destination, departureTime, arrivalTime, duration, stops, hubs }) => {
  return (
    <div className={classes.route__line}>
      <div className={`${classes['card__info-block']} info`}>
        <p className={`${classes.info__heading}`}>
          {origin} - {destination}
        </p>
        <p className={`${classes.info__span}`}>
          {departureTime} - {arrivalTime}
        </p>
      </div>
      <div className={`${classes['card__info-block']} info`}>
        <p className={`${classes.info__heading}`}>В пути</p>
        <time dateTime="" className={`${classes.info__span} ${classes.info__time}`}>
          {duration}
        </time>
      </div>
      <div className={`${classes['card__info-block']} info`}>
        <p className={`${classes.info__heading}`}>{stops}</p>
        <p className={`${classes.info__span}`}>{hubs}</p>
      </div>
    </div>
  )
})

export default RouteLine
