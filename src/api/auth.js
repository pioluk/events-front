/* @flow */

import { apiPost } from './utils'

export const login = (username: string, password: string) =>
  apiPost('login', { username, password })
