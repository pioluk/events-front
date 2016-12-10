import { call, take, put } from 'redux-saga/effects'
import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../constants/comments'
import * as actions from '../actions/comments'
import { getComments, createComment, removeComment } from '../api/comments'

export function* getCommentsFlow () {
  while (true) {
    const { eventId, limit, offset } = yield take(FETCH_COMMENTS)
    try {
      const { count, comments } = yield call(getComments, eventId, limit, offset)
      if (comments) {
        yield put(actions.fetchCommentsSuccess(count, comments))
      }
    } catch (err) {
      yield put(actions.fetchCommentsFailure(err))
    }
  }
}

export function* createCommentFlow () {
  while (true) {
    const { eventId, text } = yield take(ADD_COMMENT)
    try {
      const comment = yield call(createComment, eventId, text)
      if (comment) {
        yield put(actions.addCommentSuccess(comment))
      }
    } catch (err) {
      yield put(actions.addCommentFailure(err))
    }
  }
}

export function* removeCommentFlow () {
  while (true) {
    const { id } = yield take(REMOVE_COMMENT)
    try {
      yield call(removeComment, id)
      yield put(actions.removeCommentSuccess(id))
    } catch (err) {
      yield put(actions.removeCommentFailure(err))
    }
  }
}
