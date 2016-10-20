/* @flow */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './store/configureStore'
import Root from './containers/Root'

import './index.css'

const store = configureStore()

injectTapEventPlugin()

render(
  <Root history={browserHistory} store={store} />,
  document.getElementById('root')
)
