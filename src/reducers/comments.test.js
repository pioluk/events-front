// global describe,it,expect

import reducer from './comments'
import * as actions from '../actions/comments'

describe('comments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle FETCH_COMMENTS', () => {
    const state = reducer(undefined, actions.fetchComments(1, 20, 0))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_COMMENTS_SUCCESS', () => {
    const comments = [
      {
        user: {
          id: 1,
          username: 'pioluk',
          email: '181423@edu.p.lodz.pl',
          imageAvatar: null,
          createdAt: '2016-12-01T13:02:38.213Z',
          updatedAt: '2016-12-01T13:02:38.213Z'
        },
        id: 1,
        UserId: 1,
        EventId: 1,
        text: 'Lorem ipsum',
        createdAt: '2016-12-03T12:00:00.000Z',
        updatedAt: '2016-12-03T12:00:00.000Z',
        deletedAt: null
      },
      {
        user: {
          id: 1,
          username: 'pioluk',
          email: '181423@edu.p.lodz.pl',
          imageAvatar: null,
          createdAt: '2016-12-01T13:02:38.213Z',
          updatedAt: '2016-12-01T13:02:38.213Z'
        },
        id: 2,
        UserId: 1,
        EventId: 1,
        text: 'Dolor Amet',
        createdAt: '2016-12-03T12:30:00.000Z',
        updatedAt: '2016-12-03T12:30:00.000Z',
        deletedAt: null
      }
    ]
    const state = reducer(undefined, actions.fetchCommentsSuccess(comments))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_COMMENTS_FAILURE', () => {
    const error = new Error('Error fetching comments')
    const state = reducer(undefined, actions.fetchCommentsFailure(error))
    expect(state).toMatchSnapshot()
  })

  it('should handle ADD_COMMENT', () => {
    const text = 'Comment #1'
    const state = reducer(undefined, actions.addComment(text))
    expect(state).toMatchSnapshot()
  })

  it('should handle ADD_COMMENT_SUCCESS', () => {
    const comment = {
      user: {
        id: 1,
        username: 'pioluk',
        email: '181423@edu.p.lodz.pl',
        imageAvatar: null,
        createdAt: '2016-12-01T13:02:38.213Z',
        updatedAt: '2016-12-01T13:02:38.213Z'
      },
      id: 1,
      UserId: 1,
      EventId: 1,
      text: 'Lorem ipsum',
      createdAt: '2016-12-03T12:00:00.000Z',
      updatedAt: '2016-12-03T12:00:00.000Z',
      deletedAt: null
    }
    const state = reducer(undefined, actions.addCommentSuccess(comment))
    expect(state).toMatchSnapshot()
  })

  it('should handle ADD_COMMENT_FAILURE', () => {
    const error = new Error('Error adding comment')
    const state = reducer(undefined, actions.addCommentFailure(error))
    expect(state).toMatchSnapshot()
  })

  it('should handle REMOVE_COMMENT', () => {
    const id = 1
    const state = reducer(undefined, actions.removeComment(id))
    expect(state).toMatchSnapshot()
  })

  it('should handle REMOVE_COMMENT_SUCCESS', () => {
    const id = 1
    const initialState = {
      comments: [
        {
          user: {
            id: 1,
            username: 'pioluk',
            email: '181423@edu.p.lodz.pl',
            imageAvatar: null,
            createdAt: '2016-12-01T13:02:38.213Z',
            updatedAt: '2016-12-01T13:02:38.213Z'
          },
          id: 1,
          UserId: 1,
          EventId: 1,
          text: 'Lorem ipsum',
          createdAt: '2016-12-03T12:00:00.000Z',
          updatedAt: '2016-12-03T12:00:00.000Z',
          deletedAt: null
        },
        {
          user: {
            id: 1,
            username: 'pioluk',
            email: '181423@edu.p.lodz.pl',
            imageAvatar: null,
            createdAt: '2016-12-01T13:02:38.213Z',
            updatedAt: '2016-12-01T13:02:38.213Z'
          },
          id: 2,
          UserId: 1,
          EventId: 1,
          text: 'Dolor Amet',
          createdAt: '2016-12-03T12:30:00.000Z',
          updatedAt: '2016-12-03T12:30:00.000Z',
          deletedAt: null
        }
      ],
      error: null,
      isLoading: false
    }
    const state = reducer(initialState, actions.removeCommentSuccess(id))
    expect(state).toMatchSnapshot()
  })

  it('should handle REMOVE_COMMENT_FAILURE', () => {
    const error = new Error('Error removing comment')
    const state = reducer(undefined, actions.removeCommentFailure(error))
    expect(state).toMatchSnapshot()
  })
})
