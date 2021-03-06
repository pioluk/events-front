// @flow

import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  REMOVE_COMMENT,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  RESET_COMMENTS
} from '../constants/comments'

export function fetchComments (eventId: number, page: number) {
  return {
    type: FETCH_COMMENTS,
    eventId,
    page
  }
}

export function fetchCommentsSuccess (count: number, comments: any[]) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    count,
    comments
  }
}

export function fetchCommentsFailure (error: Error) {
  return {
    type: FETCH_COMMENTS_FAILURE,
    error
  }
}

export function addComment (eventId: number, text: string) {
  return {
    type: ADD_COMMENT,
    eventId,
    text
  }
}

export function addCommentSuccess (comment: any) {
  return {
    type: ADD_COMMENT_SUCCESS,
    comment
  }
}

export function addCommentFailure (error: Error) {
  return {
    type: ADD_COMMENT_FAILURE,
    error
  }
}

export function removeComment (id: number) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

export function removeCommentSuccess (id: number) {
  return {
    type: REMOVE_COMMENT_SUCCESS,
    id
  }
}

export function removeCommentFailure (error: Error) {
  return {
    type: REMOVE_COMMENT_FAILURE,
    error
  }
}

export function reset () {
  return {
    type: RESET_COMMENTS
  }
}
