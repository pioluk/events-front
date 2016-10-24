/* @flow */

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import EventAddView from '../views/EventAddView'
import NotFoundView from '../views/NotFoundView'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/login" component={LoginView} />
    <Route path="/event/new" component={EventAddView} />
    <Route path="*" component={NotFoundView} />
  </Route>
)

export default history => (
  <Router history={history} routes={routes} />
)
