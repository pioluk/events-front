// @flow

import fecha from 'fecha'

export const formatDateTimeShort = (date: string) =>
  fecha.format(new Date(date), 'MMM D, HH:mm')

export const formatDateTime = (date: string) =>
  fecha.format(new Date(date), 'YYYY.MM.DD HH:mm')
