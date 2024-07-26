import { FETCH_TICKETS, SET_LOADING } from '../types'

const initialState = {
  loading: true,
  tickets: [],
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
