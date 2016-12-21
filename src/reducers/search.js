// @flow

import { prop, uniqBy } from 'ramda'
import {
  SEARCH_EVENTS,
  SEARCH_EVENTS_RESET,
  SEARCH_EVENTS_SUCCESS
} from '../constants/search'

type Event = any

type SearchState = {
  count: number,
  error: ?Error,
  totalCount: number,
  isLoading: boolean,
  events: Array<Event>
}

const initialState = {
  count: 0,
  error: null,
  events: [],
  isLoading: false,
  totalCount: 0
}

export default function searchReducer (state: SearchState = initialState, action: any) {
  switch (action.type) {
    case SEARCH_EVENTS:
      return {
        ...state,
        isLoading: true
      }

    case SEARCH_EVENTS_RESET:
      return initialState

    case SEARCH_EVENTS_SUCCESS:
      const events = [ ...state.events, ...action.events ]
      return {
        ...state,
        count: events.length,
        error: null,
        events,
        isLoading: false,
        totalCount: action.count
      }

    default:
      return state
  }
}
