import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from '../constants/events'

export function fetchEventsRequest () {
  return {
    type: FETCH_EVENTS_REQUEST
  }
}

export function fetchEventsSuccess (events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    events
  }
}

export function fetchEventsFailure (error) {
  return {
    type: FETCH_EVENTS_FAILURE,
    error
  }
}
