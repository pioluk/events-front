// @flow

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENT_DETAILS_FAILURE,
  INCREASE_PAGE,
  RESET_EVENTS_NEARBY,
  FETCH_EVENTS_NEARBY,
  FETCH_EVENTS_NEARBY_SUCCESS,
} from '../constants/events'

export function fetchEventsRequest (page: number) {
  return {
    type: FETCH_EVENTS_REQUEST,
    page
  }
}

export function fetchEventsSuccess (count: number, events: Array<any>) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    count,
    events
  }
}

export function fetchEventsFailure (error: Error) {
  return {
    type: FETCH_EVENTS_FAILURE,
    error
  }
}

export function addEvent (event: any) {
  return {
    type: ADD_EVENT,
    event
  }
}

export function addEventSuccess (event: any) {
  return {
    type: ADD_EVENT_SUCCESS,
    event
  }
}

export function addEventFailure (error: any) {
  return {
    type: ADD_EVENT_FAILURE,
    error
  }
}

export function fetchEventDetailsReqeust (eventId: number) {
  return {
    type: FETCH_EVENT_DETAILS_REQUEST,
    eventId
  }
}

export function fetchEventDetailsSuccess (eventDetails: any) {
  return {
    type: FETCH_EVENT_DETAILS_SUCCESS,
    eventDetails
  }
}

export function fetchEventDetailsFailure (error: Error) {
  return {
    type: FETCH_EVENT_DETAILS_FAILURE,
    error
  }
}

export function increasePage () {
  return {
    type: INCREASE_PAGE
  }
}

export function resetEventsNearby () {
  return {
    type: RESET_EVENTS_NEARBY
  }
}

export function fetchEventsNearby (eventId: number) {
  return {
    type: FETCH_EVENTS_NEARBY,
    id: eventId
  }
}

export function fetchEventsNearbySuccess (events: Array<any>) {
  return {
    type: FETCH_EVENTS_NEARBY_SUCCESS,
    events
  }
}
