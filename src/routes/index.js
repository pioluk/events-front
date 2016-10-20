/* @flow */

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/login" component={LoginView} />
  </Route>
)

export default history => (
  <Router history={history} routes={routes} />
)
