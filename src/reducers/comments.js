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

type Comment = any

type CommentsState = {
  totalCount: number,
  commentCount: number,
  comments: Array<Comment>,
  error: ?Error,
  isLoading: boolean,
}

const initialState: CommentsState = {
  totalCount: 0,
  commentCount: 0,
  comments: [],
  error: null,
  isLoading: false,
}

export default function commentsReducer (state: CommentsState = initialState, action: any) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, isLoading: true }

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        totalCount: action.count,
        commentCount: state.commentCount + action.comments.length,
        comments: [...state.comments, ...action.comments],
        isLoading: false
      }

    case FETCH_COMMENTS_FAILURE:
      return { ...state, error: action.error, isLoading: false }

    case ADD_COMMENT:
      return { ...state }

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.comment, ...state.comments]
      }

    case ADD_COMMENT_FAILURE:
      return { ...state, error: action.error }

    case REMOVE_COMMENT_SUCCESS: {
      const comments = state.comments.filter(comment => comment.id !== action.id)
      return { ...state, comments }
    }

    case REMOVE_COMMENT_FAILURE:
      return { ...state, error: action.error }

    case RESET_COMMENTS:
      return initialState

    default:
      return state
  }
}
