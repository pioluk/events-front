/* @flow */

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from '../constants/events'

type Event = any

type EventsState = {
  isLoading: boolean,
  events: Array<Event>,
  error: ?Error
}

const initialState: EventsState = {
  isLoading: false,
  events: [],
  error: null
}

export default function eventsReducer (state: EventsState = initialState, action: any) {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { ...state, isLoading: true }

    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: [...state.events, ...action.events]
      }

    case FETCH_EVENTS_FAILURE:
      return { ...state, isLoading: false, events: [], error: action.error }

    default:
      return state
  }
}
