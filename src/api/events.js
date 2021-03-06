import { apiGet } from './utils'
import { API_URL, EVENT_PAGE_SIZE } from '../config'

export const getEvent = (id: number) =>
  apiGet('event/' + id)

export const getEvents = (page: number) =>
  apiGet(`event?limit=${EVENT_PAGE_SIZE}&offset=${(page - 1) * EVENT_PAGE_SIZE}`)

export const getEventsNearby = (id: number) =>
  apiGet(`event/${id}/nearby`)

export const searchEvents = (page: number, query: string) =>
  apiGet(`event/search?q=${query}&limit=${EVENT_PAGE_SIZE}&offset=${(page - 1) * EVENT_PAGE_SIZE}`)

export const createEvent = event => {
  const user = JSON.parse(localStorage.getItem('user')) || {}

  const formData = new FormData()

  const [ startDate, _1 ] = event.dateStart.toJSON().split('T')
  const [ _2, startTime ] = event.timeStart.toJSON().split('T')

  const [ endDate, _3 ] = event.dateEnd.toJSON().split('T')
  const [ _4, endTime ] = event.timeEnd.toJSON().split('T')

  formData.append('UserId', user.id)
  formData.append('title', event.title)
  formData.append('description', event.description)
  formData.append('dateStart', startDate + 'T' + startTime)
  formData.append('dateEnd', endDate + 'T' + endTime)
  formData.append('color', event.color)
  formData.append('image', event.image)
  formData.append('emails', event.emails)
  formData.append('phones', event.phones)
  formData.append('websites', event.websites)
  formData.append('location.name', event.location.name)
  formData.append('location.lat', event.location.lat)
  formData.append('location.lng', event.location.lng)
  formData.append('location.placeId', event.location.placeId)

  return fetch(`${API_URL}/event`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    },
    body: formData
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
  })
  .then(x => x.json())
}
