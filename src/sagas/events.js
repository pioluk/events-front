import { call, take, put } from 'redux-saga/effects'
import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENT_DETAILS_SUCCESS,
  ADD_EVENT,
  FETCH_EVENTS_NEARBY,
  FETCH_EVENTS_NEARBY_SUCCESS
} from '../constants/events'
import * as actions from '../actions/events'
import { fetchComments, reset } from '../actions/comments'
import { selectEvent } from '../actions/ui'
import { getEvent, getEvents, getEventsNearby, createEvent } from '../api/events'

export function* loadEventComments () {
  while (true) {
    const { eventDetails: event } = yield take(FETCH_EVENT_DETAILS_SUCCESS)
    yield put(reset())
    yield put(fetchComments(event.id, 1))
  }
}

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
    yield put(actions.resetEventsNearby())
    try {
      const eventDetails = yield call(getEvent, eventId)
      if (eventDetails) {
        yield put(actions.fetchEventDetailsSuccess(eventDetails))
        yield put(selectEvent(eventDetails.color, eventDetails.image))
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
    } catch (err) {
      yield put(actions.addEventFailure(err))
    }
  }
}

export function* getEventsNearbyFlow () {
  while (true) {
    const { id } = yield take(FETCH_EVENTS_NEARBY)
    try {
      const events = yield call(getEventsNearby, id)
      yield put(actions.fetchEventsNearbySuccess(events))
    } catch (err) {
      yield put(actions.fetchEventsFailure(err))
    }
  }
}
