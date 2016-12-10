// global describe,it,expect

import * as actions from './ui'

describe('ui actions', () => {
  it('should create an action to select an event', () => {
    const color = '#a5aaf2'
    const image = 'ec8672d6-3787-4ce6-a35b-715d012f23e4.jpg'
    expect(actions.selectEvent(color, image)).toMatchSnapshot()
  })
})
