// global describe,it,expect

import { formatDateTimeShort } from './dates'

describe('dates', () => {
  describe('formatDateTimeShort', () => {
    it('should exist', () => {
      expect(formatDateTimeShort).toBeInstanceOf(Function)
    })

    it('should format date correctly', () => {
      const formattedString = formatDateTimeShort('2016-01-01T12:00:00.000Z')
      expect(formattedString).toMatchSnapshot()
    })
  })
})
