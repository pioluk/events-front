// global describe,it,expect

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Error from './Error'

describe('Error component', () => {
  it('should have correct styles and structure', () => {
    const wrapper = shallow(<Error />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should contain passed message', () => {
    const message = 'This field is required.'
    const wrapper = shallow(<Error message={message} />)
    expect(wrapper.children().length).toEqual(1)
    expect(wrapper.contains(message)).toBe(true)
  })
})
