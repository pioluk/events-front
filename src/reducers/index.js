/* @flow */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ui from './ui'
import auth from './auth'
import events from './events'
import notifications from './notifications'
import comments from './comments'
import search from './search'

const rootReducer = combineReducers({
  auth,
  comments,
  events,
  notifications,
  routing: routerReducer,
  search,
  ui
})

export default rootReducer
