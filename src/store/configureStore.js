/* @flow */

import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore (initialState: any = {}, history: any) {
  const logger = createLogger({ collapsed: true })
  const sagaMiddleware = createSagaMiddleware()
  const router = routerMiddleware(history)
  const middleware = applyMiddleware(router, logger, sagaMiddleware)

  const store = createStore(rootReducer, initialState, middleware)

  sagaMiddleware.run(rootSaga)

  return store
}
