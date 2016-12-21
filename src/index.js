/* @flow */

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}

import 'react-toolbox/lib/commons.scss'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './store/configureStore'
import Root from './containers/Root'
import { loginSuccess } from './actions/auth'
import { displayNotification } from './actions/notifications'

import './index.css'

injectTapEventPlugin()

const store = configureStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

try {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  if (!!user && !!token) {
    store.dispatch(loginSuccess(user, token));
  }
}
catch (err) {
  console.warn('Incorrect user data in localStorage. Clearing...')
  store.dispatch(displayNotification('Incorrect user credentials'))
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

render(
  <Root history={history} store={store} />,
  document.getElementById('root')
)
