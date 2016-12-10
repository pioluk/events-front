/* @flow */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ui from './ui'
import auth from './auth'
import events from './events'
import notifications from './notifications'
import comments from './comments'

const rootReducer = combineReducers({
  auth,
  events,
  comments,
  ui,
  notifications,
  routing: routerReducer
})

export default rootReducer
