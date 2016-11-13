/* @flow */

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENT_DETAILS_FAILURE
} from '../constants/events'

type Event = any

type EventsState = {
  isLoading: boolean,
  events: Array<Event>,
  eventDetails: ?any,
  eventComments: Array<any>,
  error: ?Error
}

const initialState: EventsState = {
  isLoading: false,
  events: [],
  eventDetails: null,
  eventComments: [],
  error: null
}

export default function eventsReducer (state: EventsState = initialState, action: any) {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
    case FETCH_EVENT_DETAILS_REQUEST:
      return { ...state, isLoading: true }

    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
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

    default:
      return state
  }
}
