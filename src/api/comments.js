// @flow

import { apiGet, apiPost, apiDelete } from './utils'
import { COMMENT_PAGE_SIZE } from '../config'

export const getComments = (eventId: number, page: number) =>
  apiGet(`event/${eventId}/comment?limit=${COMMENT_PAGE_SIZE}&offset=${(page - 1) * COMMENT_PAGE_SIZE}`)

export const createComment = (eventId: number, text: string) =>
  apiPost(`event/${eventId}/comment`, { text })

export const removeComment = (eventId: number, commentId: number) =>
  apiDelete(`event/${eventId}/comment/${commentId}`)
