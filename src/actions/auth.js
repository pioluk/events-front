/* @flow */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants/auth'

export function loginRequest (username, password) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  }
}

export function loginSuccess (user, token) {
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
