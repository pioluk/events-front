import { apiGet } from './utils'

export const getEvent = id => apiGet('event/' + id)

export const getEventComments = id => apiGet(`event/${id}/comment`)
