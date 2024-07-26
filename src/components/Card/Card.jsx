import React from 'react'
import { add, format } from 'date-fns'
import classes from './Card.module.scss'

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

const Card = React.memo(({ price, carrier, segments }) => {
  // Первый сегмент (туда)
  const formattedFlightFromTime = format(new Date(segments[0].date), 'HH:mm')
  const flightFromTimeArrival = add(new Date(segments[0].date), { minutes: segments[0].duration })
  const formattedFlightFromTimeArrival = format(flightFromTimeArrival, 'HH:mm')

  const durationFrom = segments[0].duration
  const hoursFrom = Math.floor(durationFrom / 60)
  const minutesFrom = durationFrom % 60
  const formattedFlightFromDuration = `${hoursFrom > 0 ? `${hoursFrom}ч ` : ''}${minutesFrom > 0 ? `${minutesFrom}м` : ''}`

  const flightFromStopsCount = segments[0].stops.length
  const formattedFlightFromHubs = flightFromStopsCount > 0 ? segments[0].stops.join(', ') : 'Прямой'
  const formattedFlightFromStops =
    flightFromStopsCount === 0
      ? 'Без пересадок'
      : flightFromStopsCount === 1
        ? '1 пересадка'
        : flightFromStopsCount === 2 || flightFromStopsCount === 3
          ? `${flightFromStopsCount} пересадки`
          : `${flightFromStopsCount} пересадок`

  // Второй сегмент (обратно)
  const formattedFlightToTime = format(new Date(segments[1].date), 'HH:mm')
  const flightToTimeArrival = add(new Date(segments[1].date), { minutes: segments[1].duration })
  const formattedFlightToTimeArrival = format(flightToTimeArrival, 'HH:mm')

  const durationTo = segments[1].duration
  const hoursTo = Math.floor(durationTo / 60)
  const minutesTo = durationTo % 60
  const formattedFlightToDuration = `${hoursTo > 0 ? `${hoursTo}ч ` : ''}${minutesTo > 0 ? `${minutesTo}м` : ''}`

  const flightToStopsCount = segments[1].stops.length
  const formattedFlightToHubs = flightToStopsCount > 0 ? segments[1].stops.join(', ') : 'Прямой'
  const formattedFlightToStops =
    flightToStopsCount === 0
      ? 'Без пересадок'
      : flightToStopsCount === 1
        ? '1 пересадка'
        : flightToStopsCount === 2 || flightToStopsCount === 3
          ? `${flightToStopsCount} пересадки`
          : `${flightToStopsCount} пересадок`

  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <span className={classes.card__price}>{price} Р</span>
        <img src={`https://pics.avs.io/330/108/${carrier}.png?=v1`} alt="airline" width={110} height={36} />
      </div>
      <div className={`${classes.card__route} ${classes.route}`}>
        <RouteLine
          origin={segments[0].origin}
          destination={segments[0].destination}
          departureTime={formattedFlightFromTime}
          arrivalTime={formattedFlightFromTimeArrival}
          duration={formattedFlightFromDuration}
          stops={formattedFlightFromStops}
          hubs={formattedFlightFromHubs}
        />
        <RouteLine
          origin={segments[1].origin}
          destination={segments[1].destination}
          departureTime={formattedFlightToTime}
          arrivalTime={formattedFlightToTimeArrival}
          duration={formattedFlightToDuration}
          stops={formattedFlightToStops}
          hubs={formattedFlightToHubs}
        />
      </div>
    </div>
  )
})

export default Card
