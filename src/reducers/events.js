/* @flow */

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENT_DETAILS_FAILURE,
  RESET_EVENTS_NEARBY,
  FETCH_EVENTS_NEARBY_SUCCESS
} from '../constants/events'

type Event = any

type EventsState = {
  count: number,
  error: ?Error,
  eventCount: number,
  eventDetails: ?any,
  events: Array<Event>,
  nearbyEvents: ?Array<Event>,
  isLoading: boolean,
}

const initialState: EventsState = {
  count: 0,
  error: null,
  eventCount: 0,
  eventDetails: null,
  events: [],
  nearbyEvents: null,
  isLoading: false,
}

export default function eventsReducer (state: EventsState = initialState, action: any) {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
    case FETCH_EVENT_DETAILS_REQUEST:
      return { ...state, isLoading: true }

    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        count: action.count,
        isLoading: false,
        eventCount: state.eventCount + action.events.length,
        events: [...state.events, ...action.events]
      }

    case FETCH_EVENTS_FAILURE:
      return { ...state, isLoading: false, events: [], error: action.error }

    case FETCH_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        eventDetails: action.eventDetails
      }

    case FETCH_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        error: action.error
      }

    case RESET_EVENTS_NEARBY:
      return {
        ...state,
        nearbyEvents: null
      }

    case FETCH_EVENTS_NEARBY_SUCCESS:
      return {
        ...state,
        nearbyEvents: action.events
      }

    default:
      return state
  }
}
