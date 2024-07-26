import { FETCH_TICKETS, SET_ALL_FILTERS, SET_FILTER, SET_LOADING, SET_SORT_ORDER } from './types'

export const setSortOrder = (order) => ({
  type: SET_SORT_ORDER,
  payload: order,
})

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
})

export const setAllFilters = (checked) => ({
  type: SET_ALL_FILTERS,
  payload: checked,
})

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
})

export const setTickets = (tickets) => ({
  type: FETCH_TICKETS,
  payload: tickets,
})

export const getTickets = () => async (dispatch) => {
  try {
    const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
    const searchIdData = await searchIdResponse.json()
    const searchId = searchIdData.searchId
    const fetchTickets = async () => {
      try {
        const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        const ticketsData = await ticketsResponse.json()
        if (ticketsData.tickets.length > 0) {
          const ticketsArray = ticketsData.tickets.map((ticket) => {
            const maxStops = Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length)

            return {
              ...ticket,
              maxStops,
            }
          })
          dispatch(setTickets(ticketsArray))
        }

        if (!ticketsData.stop) {
          await fetchTickets()
        }
      } catch (error) {
        await fetchTickets()
      }
    }

    await fetchTickets()
  } catch (error) {
    console.error('Ошибка при получении searchId:', error)
  } finally {
    dispatch(setLoading(false))
  }
}
