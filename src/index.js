/* @flow */

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './store/configureStore'
import Root from './containers/Root'

import { apiGet, apiPost } from './api/utils'

import './index.css'

window.apiGet = apiGet
window.apiPost = apiPost

const store = configureStore()

injectTapEventPlugin()

render(
  <Root history={browserHistory} store={store} />,
  document.getElementById('root')
)
