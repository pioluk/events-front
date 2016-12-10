// flow

import * as actions from './comments'

describe('comments actions', () => {
  it('should create an action to fetch comments', () => {
    expect(actions.fetchComments(1, 20, 0)).toMatchSnapshot()
  })

  it('should create an action to send fetched comments', () => {
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
    expect(actions.fetchCommentsSuccess(2, comments)).toMatchSnapshot()
  })

  it('should create an action to indicate comment fetching error', () => {
    const error = new Error('Error fetching comments')
    expect(actions.fetchCommentsFailure(error)).toMatchSnapshot()
  })

  it('should create an action representing text to create comment', () => {
    const eventId = 1
    const text = 'Comment #1'
    expect(actions.addComment(eventId, text)).toMatchSnapshot()
  })

  it('should create an action representing a comment to add', () => {
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
    expect(actions.addCommentSuccess(comment)).toMatchSnapshot()
  })

  it('should create an action representing comment adding error', () => {
    const error = new Error('Comment adding failed')
    expect(actions.addCommentFailure(error)).toMatchSnapshot()
  })

  it('should create an action representing a request to remove a comment', () => {
    const id = 1
    expect(actions.removeComment(id)).toMatchSnapshot()
  })

  it('should create an action representing a comment to remove', () => {
    const id = 1
    expect(actions.removeCommentSuccess(id)).toMatchSnapshot()
  })

  it('should create an action representing comment removal erorr', () => {
    const error = new Error('Comment removing failed')
    expect(actions.removeCommentFailure(error)).toMatchSnapshot()
  })
})
