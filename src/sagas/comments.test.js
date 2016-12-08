import { getCommentsFlow, createCommentFlow, removeCommentFlow } from './comments'
import { call, take, put } from 'redux-saga/effects'
import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../constants/comments'
import * as actions from '../actions/comments'
import { getComments, createComment, removeComment } from '../api/comments'

describe('comments saga', () => {
  it('getComments success', () => {
    const generator = getCommentsFlow()

    expect(generator.next().value).toEqual(take(FETCH_COMMENTS))

    const eventId = 1
    const limit = 20
    const offset = 0
    expect(generator.next({ eventId, limit, offset }).value)
      .toEqual(call(getComments, eventId, limit, offset))

    const count = 2
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
    expect(generator.next({ count, comments }).value)
      .toEqual(put(actions.fetchCommentsSuccess(count, comments)))

    expect(generator.next().value).toEqual(take(FETCH_COMMENTS))
  })

  it('getComments failure', () => {
    const generator = getCommentsFlow()

    expect(generator.next().value).toEqual(take(FETCH_COMMENTS))

    const eventId = 1
    const limit = 20
    const offset = 0
    expect(generator.next({ eventId, limit, offset }).value)
      .toEqual(call(getComments, eventId, limit, offset))

    const error = new Error('Error fetching comments')
    expect(generator.throw(error).value)
      .toEqual(put(actions.fetchCommentsFailure(error)))

    expect(generator.next().value).toEqual(take(FETCH_COMMENTS))
  })

  it('createComment success', () => {
    const generator = createCommentFlow()

    expect(generator.next().value).toEqual(take(ADD_COMMENT))

    const text = 'Comment #1'
    expect(generator.next({ text }).value).toEqual(call(createComment, { text }))

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
    expect(generator.next(comment).value).toEqual(put(actions.addCommentSuccess(comment)))

    expect(generator.next().value).toEqual(take(ADD_COMMENT))
  })

  it('createComment failure', () => {
    const generator = createCommentFlow()

    expect(generator.next().value).toEqual(take(ADD_COMMENT))

    const text = 'Comment #1'
    expect(generator.next({ text }).value).toEqual(call(createComment, { text }))

    const error = new Error('Comment adding error.')
    expect(generator.throw(error).value).toEqual(put(actions.addCommentFailure(error)))

    expect(generator.next().value).toEqual(take(ADD_COMMENT))
  })

  it('removeComment success', () => {
    const generator = removeCommentFlow()

    expect(generator.next().value).toEqual(take(REMOVE_COMMENT))

    const id = 1
    expect(generator.next({ id }).value).toEqual(call(removeComment, id))

    expect(generator.next().value).toEqual(put(actions.removeCommentSuccess(id)))

    expect(generator.next().value).toEqual(take(REMOVE_COMMENT))
  })

  it('removeComment failure', () => {
    const generator = removeCommentFlow()

    expect(generator.next().value).toEqual(take(REMOVE_COMMENT))

    const id = 1
    expect(generator.next({ id }).value).toEqual(call(removeComment, id))

    const error = new Error('Error deleting comment.')
    expect(generator.throw(error).value).toEqual(put(actions.removeCommentFailure(error)))

    expect(generator.next().value).toEqual(take(REMOVE_COMMENT))
  })
})
