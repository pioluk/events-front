// @flow

import { DISPLAY_NOTIFICATION } from '../constants/notifications'

type Notification = {
  id: string,
  message: string
}

const initialState: Notification = {
  id: '',
  message: ''
}

let nextId = 1

export default function notifications (state: Notification = initialState, action: any) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION:
      return {
        id: nextId++,
        message: action.message
      }

    default:
      return state
  }
}
