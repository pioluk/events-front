import { take, put } from 'redux-saga/effects'
import { LOGIN_FAILURE } from '../constants/auth'
import { FETCH_COMMENTS_FAILURE, ADD_COMMENT_FAILURE, REMOVE_COMMENT_FAILURE } from '../constants/comments'
import { FETCH_EVENTS_FAILURE, FETCH_EVENT_DETAILS_FAILURE, ADD_EVENT_FAILURE } from '../constants/events'
import { displayNotification } from '../actions/notifications'

const actionTypesToWatch = [
  LOGIN_FAILURE,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT_FAILURE,
  REMOVE_COMMENT_FAILURE,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_DETAILS_FAILURE,
  ADD_EVENT_FAILURE
]

export function *watchErrors () {
  while (true) {
    const { error } = yield take(actionTypesToWatch)
    yield put(displayNotification(error.message))
  }
}
