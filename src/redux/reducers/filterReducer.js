import { SET_FILTER, SET_ALL_FILTERS } from '../types'

const initialState = {
  all: false,
  noStops: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      const newState = {
        ...state,
        [action.payload]: !state[action.payload],
      }

      const allChecked = newState.noStops && newState.oneStop && newState.twoStops && newState.threeStops

      newState.all = allChecked

      return newState
    }

    case SET_ALL_FILTERS: {
      const newState = action.payload
        ? { all: true, noStops: true, oneStop: true, twoStops: true, threeStops: true }
        : { all: false, noStops: false, oneStop: false, twoStops: false, threeStops: false }

      return newState
    }

    default:
      return state
  }
}
