// @flow

import R from 'ramda'

const makePredicate = ([predFn, e]) => a => predFn(a) ? null : e

const makePredicates = R.map(makePredicate)

const runPredicates = ([input, validations]) =>
  R.map(predFn => predFn(input), makePredicates(validations))

const validate = R.map(R.compose(R.head, runPredicates))

const makeValidationObject = R.mergeWithKey((k, l, r) => [l, r])

export const getErrors = R.compose(validate, makeValidationObject)

export const isString = (str: any) =>
  typeof str === 'string'

export const isNonEmpty = (str: string) => str.trim().length > 0

export const isNonEmptyString = (str: any) =>
  isString(str) && (str.trim().length > 0)

export const isDate = (value: any) => value instanceof Date
