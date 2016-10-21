/* @flow */

import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore (initialState: any) {
  const loggerMiddleware = createLogger({ collapsed: true })
  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware(loggerMiddleware, sagaMiddleware)
  const store = createStore(rootReducer, middleware, initialState)

  sagaMiddleware.run(rootSaga)

  return store
}
