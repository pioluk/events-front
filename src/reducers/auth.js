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
      return {
        ...state,
        isAuthenticating: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        isAuthenticated: true,
        isAuthenticating: false,
        token: action.token,
        user: action.user
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.error.message,
        isAuthenticated: false,
        isAuthenticating: false
      };

    case LOGOUT:
      return initialState;

    default:
      return state
  }
}
