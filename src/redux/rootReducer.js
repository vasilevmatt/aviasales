import { combineReducers } from 'redux'
import { filterReducer } from './reducers/filterReducer'
import { sortReducer } from './reducers/sortReducer'
import { ticketsReducer } from './reducers/ticketsReducer'

export const rootReducer = combineReducers({
  filters: filterReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
})
