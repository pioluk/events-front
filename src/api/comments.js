import { apiGet, apiPost, apiDelete } from './utils'

export const getComments = (eventId: number) =>
  apiGet(`event/${eventId}/comment`)

export const createComment = (eventId: number, text: string) =>
  apiPost(`event/${eventId}/comment`, { text })

export const removeComment = (eventId: number, commentId: number) =>
  apiDelete(`event/${eventId}/comment/${commentId}`)
