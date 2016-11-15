// global describe,it,expect

import * as actions from './notifications'

describe('notifications actions', () => {
  it('should create action to display a notifications', () => {
    const message = 'Successfully logged in.'
    expect(actions.displayNotification(message)).toMatchSnapshot()
  })
})
