import { call, take, put } from 'redux-saga/effects'
import { FETCH_EVENTS_REQUEST, FETCH_EVENT_DETAILS_REQUEST, ADD_EVENT } from '../constants/events'
import * as actions from '../actions/events'
import { selectEvent } from '../actions/ui'
import { getEvent, getEvents, createEvent } from '../api/events'

export function* getEventsFlow () {
  while (true) {
    const { page } = yield take(FETCH_EVENTS_REQUEST)
    try {
      const { count, events } = yield call(getEvents, page)
      if (events) {
        yield put(actions.fetchEventsSuccess(count, events))
      }
    }
    catch (err) {
      yield put(actions.fetchEventsFailure(err))
    }
  }
}

export function* getEventDetailsFlow () {
  while (true) {
    const { eventId } = yield take(FETCH_EVENT_DETAILS_REQUEST)
    try {
      const eventDetails = yield call(getEvent, eventId)
      if (eventDetails) {
        yield put(actions.fetchEventDetailsSuccess(eventDetails))
        yield put(selectEvent('#' + eventDetails.color, eventDetails.imageThumbnail, eventDetails.image))
      }
    }
    catch (err) {
      yield put(actions.fetchEventDetailsFailure(err))
    }
  }
}

export function* createEventFlow () {
  while (true) {
    const { event } = yield take(ADD_EVENT)
    try {
      yield call(createEvent, event)
      yield put(actions.addEventSuccess())
    }
    catch (err) {
      yield put(actions.addEventFailure(err))
    }
  }
}
