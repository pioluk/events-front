/* @flow */

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { requireAuthentication } from '../components/AuthenticatedComponent'
import App from '../containers/App'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import EventAddView from '../views/EventAddView'
import EventDetailsView from '../views/EventDetailsView'
import SearchView from '../views/SearchView'
import NotFoundView from '../views/NotFoundView'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/login" component={LoginView} />
    <Route path="/event/new" component={requireAuthentication(EventAddView)} />
    <Route path="/event/:id" component={EventDetailsView} />
    <Route path="/search" component={SearchView} />
    <Route path="*" component={NotFoundView} />
  </Route>
)

export default (history: any) => (
  <Router history={history} routes={routes} />
)
