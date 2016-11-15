// global describe,test,expect

import * as actions from './auth'

describe('auth actions', () => {
  test('it should create an action to send a login request', () => {
    const username = 'admin'
    const password = 'admin1'
    expect(actions.loginRequest(username, password)).toMatchSnapshot()
  })

  test('it should create an action to indicate login success', () => {
    const user = 'admin'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    expect(actions.loginSuccess(user, token)).toMatchSnapshot()
  })

  test('it should create an action to indicate login failure', () => {
    const error = new Error('Login failure')
    expect(actions.loginFailure(error)).toMatchSnapshot()
  })

  test('it should create an action to logout', () => {
    expect(actions.logout()).toMatchSnapshot()
  })
})
