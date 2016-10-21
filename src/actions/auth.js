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

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function logout () {
  localStorage.removeItem('user')
  localStorage.removeItem('token')

  return {
    type: LOGOUT
  }
}
