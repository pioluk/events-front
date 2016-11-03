import { apiGet, apiPost } from './utils'
import { API_URL } from './config'

export const getEvent = id => apiGet('event/' + id)

export const getEvents = () => apiGet('event')

export const createEvent = event => {
  const user = JSON.parse(localStorage.getItem('user')) || {}

  const eventData = {
    ...event,
    UserId: user.id
  }

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

  return fetch(`${API_URL}/event`, {
    method: 'POST',
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

  return apiPost('event', eventData)
}
