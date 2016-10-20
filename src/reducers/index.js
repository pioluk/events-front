/* @flow */

import { combineReducers } from 'redux'
import ui from './ui'
import auth from './auth'

const rootReducer = combineReducers({
  auth,
  ui
})

export default rootReducer
