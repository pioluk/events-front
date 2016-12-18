/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants/auth'

export function loginRequest (username: string, password: string) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  }
}

export function loginSuccess (user: string, token: string) {
  return {
    type: LOGIN_SUCCESS,
    user,
    token
  }
}

export function loginFailure (error: Error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}
