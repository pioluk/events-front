import { call, take, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { LOGIN_REQUEST, LOGOUT } from '../constants/auth'
import * as authActions from '../actions/auth'
import * as notificationActions from '../actions/notifications'
import { login } from '../api/auth'

export function* loginFlow () {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST)
    try {
      const { user, token } = yield call(login, username, password)
      if (user && token) {
        if ('localStorage' in window) {
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('token', token)
          yield put(push('/'))
        }
        yield put(authActions.loginSuccess(user, token))
        yield put(notificationActions.displayNotification('Successfully logged in.'))
      }
    }
    catch (err) {
      yield put(authActions.loginFailure(err))
      yield put(notificationActions.displayNotification('Error: ' + err.message))
    }
  }
}

export function* logoutFlow () {
  while (true) {
    yield take(LOGOUT)
    if ('localStorage' in window) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
    yield put(push('/'))
  }
}
