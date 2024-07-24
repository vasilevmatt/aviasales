import { SET_SORT_ORDER } from '../types'

const initialState = {
  order: 'Самый дешевый',
}

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_ORDER:
      return {
        ...state,
        order: action.payload,
      }
    default:
      return state
  }
}
