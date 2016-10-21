import { call, take, put } from 'redux-saga/effects'
import { FETCH_EVENTS_REQUEST } from '../constants/events'
import * as actionCreators from '../actions/events'
import { getEvents } from '../api/events'

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
