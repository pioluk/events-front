// global describe,it,expect

import * as actions from './auth'

describe('auth actions', () => {
  it('it should create an action to send a login request', () => {
    const username = 'admin'
    const password = 'admin1'
    expect(actions.loginRequest(username, password)).toMatchSnapshot()
  })

  it('it should create an action to indicate login success', () => {
    const user = 'admin'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    expect(actions.loginSuccess(user, token)).toMatchSnapshot()
  })

  it('it should create an action to indicate login failure', () => {
    const error = new Error('Login failure')
    expect(actions.loginFailure(error)).toMatchSnapshot()
  })

  it('it should create an action to logout', () => {
    expect(actions.logout()).toMatchSnapshot()
  })
})
