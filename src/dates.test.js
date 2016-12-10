// global describe,it,expect

import {
  formatDateTimeShort,
  formatDateTime
} from './dates'

describe('dates', () => {
  describe('formatDateTimeShort', () => {
    it('should exist', () => {
      expect(formatDateTimeShort).toBeInstanceOf(Function)
    })

    it('should return a string', () => {
      const formattedString = formatDateTimeShort('2016-01-01T12:00:00.000Z')
      expect(typeof formattedString).toEqual('string')
    })
  })

  describe('formatDateTimeShort', () => {
    it('should exist', () => {
      expect(formatDateTime).toBeInstanceOf(Function)
    })

    it('should return a string', () => {
      const formattedString = formatDateTime('2016-01-01T12:00:00.000Z')
      expect(typeof formattedString).toEqual('string')
    })
  })
})
