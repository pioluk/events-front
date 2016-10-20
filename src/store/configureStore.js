/* @flow */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore (initialState: any) {
  const logger = createLogger({ collapsed: true });
  const middleware = applyMiddleware(logger)
  const store = createStore(rootReducer, middleware)

  return store
}
