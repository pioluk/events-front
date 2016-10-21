/* @flow */

import { combineReducers } from 'redux'
import ui from './ui'
import auth from './auth'
import events from './events'

const rootReducer = combineReducers({
  auth,
  events,
  ui
})

export default rootReducer
