import { call, take, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { LOGIN_REQUEST } from '../constants/auth'
import * as authActions from '../actions/auth'
import * as notificationActions from '../actions/notifications'
import { login } from '../api/auth'

export function* loginFlow () {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    try {
      const { user, token } = yield call(login, username, password);
      if (user && token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        yield put(authActions.loginSuccess(user, token));
        yield put(notificationActions.displayNotification('Successfully logged in.'))
        browserHistory.push('/');
      }
    }
    catch (err) {
      yield put(authActions.loginFailure(err))
      yield put(notificationActions.displayNotification('Error: ' + err.message))
    }
  }
}
