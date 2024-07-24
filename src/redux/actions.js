import { SET_ALL_FILTERS, SET_FILTER, SET_SORT_ORDER } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'

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

export const fetchSearchId = createAsyncThunk('fetchSearchId', async function () {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')

  const data = await response.json()

  return data
})
