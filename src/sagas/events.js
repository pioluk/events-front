import { call, take, put } from 'redux-saga/effects'
import { FETCH_EVENTS_REQUEST, FETCH_EVENT_DETAILS_REQUEST, ADD_EVENT } from '../constants/events'
import * as actionCreators from '../actions/events'
import { getEvent, getEvents, createEvent } from '../api/events'

export function* getEventsFlow () {
  while (true) {
    yield take(FETCH_EVENTS_REQUEST)
    try {
      const events = yield call(getEvents)
      if (events) {
        yield put(actionCreators.fetchEventsSuccess(events))
      }
    }
    catch (err) {
      yield put(actionCreators.fetchEventsFailure(err))
    }
  }
}

export function* getEventDetailsFlow () {
  while (true) {
    const { eventId } = yield take(FETCH_EVENT_DETAILS_REQUEST)
    try {
      const eventDetails = yield call(getEvent, eventId)
      if (eventDetails) {
        yield put(actionCreators.fetchEventDetailsSuccess(eventDetails))
      }
    }
    catch (err) {
      yield put(actionCreators.fetchEventDetailsFailure(err))
    }
  }
}

export function* createEventFlow () {
  while (true) {
    const { event } = yield take(ADD_EVENT)
    try {
      yield call(createEvent, event)
      yield put(actionCreators.addEventSuccess())
    }
    catch (err) {
      yield put(actionCreators.addEventFailure(err))
    }
  }
}
