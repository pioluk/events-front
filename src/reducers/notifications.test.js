// global describe,it,expect

import reducer from './notifications'
import * as actions from '../actions/notifications'

describe('notifications reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle DISPLAY_NOTIFICATION', () => {
    const message = 'Successfully logged in.'
    const state = reducer(undefined, actions.displayNotification(message))
    expect(state).toMatchSnapshot()
  })
})
