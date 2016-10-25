import { DISPLAY_NOTIFICATION } from '../constants/notifications'

export function displayNotification (message) {
  return {
    type: DISPLAY_NOTIFICATION,
    message
  }
}
