// @flow

import {
  SEARCH_EVENTS,
  SEARCH_EVENTS_RESET,
  SEARCH_EVENTS_SUCCESS
} from '../constants/search'

export function searchEvents (page: number, query: string) {
  return {
    type: SEARCH_EVENTS,
    page,
    query
  }
}

export function searchEventsReset () {
  return {
    type: SEARCH_EVENTS_RESET
  }
}

export function searchEventsSuccess (count: number, events: Array<any>) {
  return {
    type: SEARCH_EVENTS_SUCCESS,
    count,
    events
  }
}
