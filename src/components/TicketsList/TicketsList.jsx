import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../../redux/actions'
import Card from '../Card/Card'
import SortBy from '../SortBy/SortBy'
import classes from './TicketsList.module.scss'
import _ from 'lodash'

function Loading() {
  return (
    <div className={classes.results__loading}>
      <ReactLoading type="balls" color="#2196F3" />
    </div>
  )
}

export default function TicketsList() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets)
  const filters = useSelector((state) => state.filters)
  const sortBy = useSelector((state) => state.sort)

  const [shownTicketsNumber, setShownTicketsNumber] = useState(5)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  const ticketsData = filterAndSortTickets(tickets, filters, sortBy)

  const showMoreTickets = () => {
    setLoadingMore(true)
    setTimeout(() => {
      setShownTicketsNumber((prev) => prev + 5)
      setLoadingMore(false)
    }, 700)
  }

  return (
    <div className={`${classes.search__results} ${classes.results}`}>
      <SortBy setShown={setShownTicketsNumber} />

      {renderContent(tickets, ticketsData, shownTicketsNumber, loadingMore, showMoreTickets)}
    </div>
  )
}

function renderContent(tickets, ticketsData, shownTicketsNumber, loadingMore, showMoreTickets) {
  if (tickets.tickets.length <= 1500) {
    return <Loading />
  }

  return (
    <>
      {renderCards(ticketsData, shownTicketsNumber)}
      {renderShowMoreButton(ticketsData, shownTicketsNumber, loadingMore, showMoreTickets)}
      {loadingMore && <Loading />}
    </>
  )
}

function renderCards(ticketsData, shownTicketsNumber) {
  return ticketsData.slice(0, shownTicketsNumber).map((item) => <Card {...item} key={_.uniqueId(item.carrier)} />)
}

function renderShowMoreButton(ticketsData, shownTicketsNumber, loadingMore, showMoreTickets) {
  if (ticketsData.length > shownTicketsNumber && !loadingMore) {
    return (
      <button onClick={showMoreTickets} className={classes['results__show-more-button']}>
        Показать еще 5 билетов!
      </button>
    )
  }
  return null
}

function filterAndSortTickets(tickets, filters, sortBy) {
  const filteredTickets = filteredData(tickets, filters)

  switch (sortBy.order) {
    case 'cheapest':
      return filteredTickets.toSorted((a, b) => a.price - b.price)
    case 'fastest':
      return filteredTickets.toSorted(
        (a, b) =>
          a.segments.reduce((sum, segment) => sum + segment.duration, 0) -
          b.segments.reduce((sum, segment) => sum + segment.duration, 0)
      )
    case 'best':
      return filteredTickets.toSorted(findBest)
    default:
      return filteredTickets
  }
}

function filteredData(tickets, filters) {
  if (filters.all) return tickets.tickets

  const stopsOptions = []
  if (filters.noStops) stopsOptions.push(0)
  if (filters.oneStop) stopsOptions.push(1)
  if (filters.twoStops) stopsOptions.push(2)
  if (filters.threeStops) stopsOptions.push(3)

  return stopsOptions.length
    ? tickets.tickets.filter((ticket) => stopsOptions.includes(ticket.maxStops))
    : tickets.tickets
}

function findBest(a, b) {
  const aDuration = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
  const bDuration = b.segments.reduce((sum, segment) => sum + segment.duration, 0)

  const aScore = a.price * 0.4 + aDuration * 10.6
  const bScore = b.price * 0.4 + bDuration * 10.6

  return aScore - bScore
}
