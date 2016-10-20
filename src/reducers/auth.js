/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants/auth'

type AuthState = {
  errorMessage: ?string,
  isAuthenticated: boolean,
  isAuthenticating: boolean,
  token: ?string,
  user: ?any
}

const initialState: AuthState = {
  errorMessage: null,
  isAuthenticated: false,
  isAuthenticating: false,
  token: null,
  user: null
}

export default function authReducer (state: AuthState = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, { isAuthenticating: true })

    default:
      return state
  }
}
