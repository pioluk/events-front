/* @flow */

import { combineReducers } from 'redux'
import ui from './ui'
import auth from './auth'
import events from './events'
import notifications from './notifications'

const rootReducer = combineReducers({
  auth,
  events,
  ui,
  notifications
})

export default rootReducer
