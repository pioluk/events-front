// global describe,test,expect

import reducer from './ui'
import * as actions from '../actions/ui'

describe('ui reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      selectedEventColor: null,
      selectedEventThumbnail: null,
      selectedEventImage: null
    })
  })

  test('should handle SELECT_EVENT', () => {
    const color = 'red'
    const thumbnail = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AVN//2Q=='
    const image = 'http://example.com/image.png'
    const state = reducer(undefined, actions.selectEvent(color, thumbnail, image))
    expect(state).toEqual({
      selectedEventColor: color,
      selectedEventThumbnail: thumbnail,
      selectedEventImage: image
    })
  })
})
