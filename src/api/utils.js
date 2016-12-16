/* @flow */

import { API_URL } from '../config'

const parseJSON = response => response.json()

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export const apiGet = (url: string) => fetch(`${API_URL}/${url}`)
  .then(checkStatus)
  .then(parseJSON)

export const apiPost = (url: string, body: any) =>
  fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(body)
  })
  .then(checkStatus)
  .then(parseJSON)

export const apiDelete = (url: string) =>
  fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(checkStatus)
  .then(parseJSON)
