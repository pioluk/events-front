import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENT_DETAILS_FAILURE
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

export function addEvent (event) {
  return {
    type: ADD_EVENT,
    event
  }
}

export function addEventSuccess (event) {
  return {
    type: ADD_EVENT_SUCCESS,
    event
  }
}

export function addEventFailure (error) {
  return {
    type: ADD_EVENT_FAILURE,
    error
  }
}

export function fetchEventDetailsReqeust (eventId) {
  return {
    type: FETCH_EVENT_DETAILS_REQUEST,
    eventId
  }
}

export function fetchEventDetailsSuccess (eventDetails) {
  return {
    type: FETCH_EVENT_DETAILS_SUCCESS,
    eventDetails
  }
}

export function fetchEventDetailsFailure (error) {
  return {
    type: FETCH_EVENT_DETAILS_FAILURE,
    error
  }
}
