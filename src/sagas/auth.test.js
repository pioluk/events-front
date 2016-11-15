// global describe,it,expect

import { loginFlow } from './auth'
import { call, put, take } from 'redux-saga/effects'
import { LOGIN_REQUEST } from '../constants/auth'
import { login } from '../api/auth'
import * as authActions from '../actions/auth'
import * as notificationsActions from '../actions/notifications'

describe('auth sagas', () => {
  it('loginFlow success', () => {
    const generator = loginFlow()

    expect(generator.next().value).toEqual(take(LOGIN_REQUEST))

    const username = 'admin'
    const password = 'admin1'
    expect(
      generator.next({ username, password }).value
    ).toEqual(
      call(login, username, password)
    )

    const user = username
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    expect(
      generator.next({ user, token }).value
    ).toEqual(
      put(authActions.loginSuccess(user, token))
    )

    expect(generator.next().value)
      .toEqual(put(notificationsActions.displayNotification('Successfully logged in.')))

    expect(generator.next().value).toEqual(take(LOGIN_REQUEST))
  })

  it('loginFlow failure', () => {
    const generator = loginFlow()

    expect(generator.next().value).toEqual(take(LOGIN_REQUEST))

    const username = 'admin'
    const password = 'admin1'
    expect(
      generator.next({ username, password }).value
    ).toEqual(
      call(login, username, password)
    )

    const error = new Error('Login error')
    expect(generator.throw(error).value).toEqual(put(authActions.loginFailure(error)))
  })
})
