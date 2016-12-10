// global describe,test,expect

import reducer from './ui'
import * as actions from '../actions/ui'

describe('ui reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  test('should handle SELECT_EVENT', () => {
    const color = '#a5aaf2'
    const image = 'ec8672d6-3787-4ce6-a35b-715d012f23e4.jpg'
    const state = reducer(undefined, actions.selectEvent(color, image))
    expect(state).toMatchSnapshot()
  })
})
