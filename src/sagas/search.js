import { call, take, put } from 'redux-saga/effects'
import { SEARCH_EVENTS } from '../constants/search'
import { searchEventsSuccess } from '../actions/search'
import { fetchEventsFailure } from '../actions/events'
import { searchEvents } from '../api/events'

export function* searchEventsFlow () {
  while (true) {
    const { page, query } = yield take(SEARCH_EVENTS)
    try {
      const { count, events } = yield call(searchEvents, page, query)
      yield put(searchEventsSuccess(count, events))
    } catch (err) {
      yield put(fetchEventsFailure(err))
    }
  }
}
