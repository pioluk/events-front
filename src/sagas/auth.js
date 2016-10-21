import { call, take, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { LOGIN_REQUEST } from '../constants/auth'
import * as actionCreators from '../actions/auth'
import { login } from '../api/auth'

export function* loginFlow () {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    try {
      const { user, token } = yield call(login, username, password);
      if (user && token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        yield put(actionCreators.loginSuccess(user, token));
        browserHistory.push('/');
      }
    }
    catch (e) {
      yield put(actionCreators.loginFailure(e));
    }
  }
}
