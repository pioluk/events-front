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

export default function notifications (state: Notification = initialState, action: any) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION:
      return {
        id: Math.random().toString(36).slice(2),
        message: action.message
      }

    default:
      return state
  }
}
