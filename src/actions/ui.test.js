// global describe,test,expect

import * as actions from './ui'

describe('ui actions', () => {
  test('it should create an action to select an event', () => {
    const color = 'red'
    const thumbnail = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AVN//2Q=='
    const image = 'http://example.com/image.png'
    expect(actions.selectEvent(color, thumbnail, image)).toMatchSnapshot()
  })
})
