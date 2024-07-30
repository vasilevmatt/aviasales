import React, { useState } from 'react'
import { add, format } from 'date-fns'
import classes from './Card.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import RouteLine from './components/RouteLine'

const Card = React.memo(({ price, carrier, segments }) => {
  const [imageLoading, setImageLoading] = useState(true)

  function getFormattedFlightStops(stopsCount) {
    switch (stopsCount) {
      case 0:
        return 'Без пересадок'
      case 1:
        return '1 пересадка'
      case 2:
      case 3:
      case 4:
        return `${stopsCount} пересадки`
      default:
        return `${stopsCount} пересадок`
    }
  }
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
  const formattedFlightFromStops = getFormattedFlightStops(flightFromStopsCount)

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

  const formattedFlightToStops = getFormattedFlightStops(flightToStopsCount)

  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <span className={classes.card__price}>{price} Р</span>
        {imageLoading && <Skeleton width={110} height={36} />}
        <img
          src={`https://pics.avs.io/330/108/${carrier}.png?v=1`}
          alt="airline"
          width={110}
          height={36}
          onLoad={() => setTimeout(() => setImageLoading(false), 600)}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
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
