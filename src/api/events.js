import { apiGet, apiPost } from './utils'

export const getEvent = id => apiGet('event/' + id)

export const getEvents = () => apiGet('event')

export const createEvent = event => {
  const user = JSON.parse(localStorage.getItem('user')) || {}

  const eventData = {
    ...event,
    UserId: user.id
  }

  return apiPost('event', eventData)
}
