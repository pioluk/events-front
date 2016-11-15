// global describe,it,expect

import reducer from './auth'
import * as actions from '../actions/auth'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle LOGIN_REQUEST', () => {
    const username = 'admin'
    const password = 'admin1'
    const state = reducer(undefined, actions.loginRequest(username, password))
    expect(state).toMatchSnapshot()
  })

  it('should handle LOGIN_SUCCESS', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    const user = 'admin'
    const state = reducer(undefined, actions.loginSuccess(user, token))
    expect(state).toMatchSnapshot()
  })

  it('should handle LOGIN_FAILURE', () => {
    const error = new Error('Login failure.')
    const state = reducer(undefined, actions.loginFailure(error))
    expect(state).toMatchSnapshot()
  })

  it('should handle LOGOUT', () => {
    expect(reducer(undefined, actions.logout())).toMatchSnapshot()
  })
})
