// global describe,it,expect

import reducer from './events'
import * as actions from '../actions/events'

describe('events reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle FETCH_EVENTS_REQUEST', () => {
    const page = 1
    const state = reducer(undefined, actions.fetchEventsRequest(page))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_EVENT_DETAILS_REQUEST', () => {
    const eventId = 1
    const state = reducer(undefined, actions.fetchEventDetailsSuccess(eventId))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_EVENTS_SUCCESS', () => {
    const count = 2
    const events = [
      {
        id: 1,
        UserId: 1,
        title: 'nihil voluptas rerum',
        description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
        dateStart: '2016-05-23T17:38:11.010Z',
        dateEnd: '2016-12-06T02:03:56.063Z',
        color: 'a5dfd8',
        image: null,
        createdAt: '2016-10-26T07:06:39.152Z',
        updatedAt: '2016-10-26T07:06:39.152Z'
      },
      {
        id: 2,
        UserId: 1,
        title: 'voluptatem eos nostrum',
        description: 'Sequi sit minima quae totam dolores suscipit. Vero exercitationem repellendus velit. Earum ullam unde explicabo earum. Corporis architecto ab quisquam consectetur. Odio odit aliquid ex sint consequatur similique. Aut et occaecati saepe rem cupiditate et veritatis aut. Similique molestias eveniet libero labore est laboriosam. Molestiae reiciendis error neque dignissimos.',
        dateStart: '2016-07-04T18:33:59.969Z',
        dateEnd: '2017-08-27T03:37:53.566Z',
        color: '33ed3f',
        image: null,
        createdAt: '2016-10-26T07:06:40.243Z',
        updatedAt: '2016-10-26T07:06:40.243Z'
      }
    ]
    const state = reducer(undefined, actions.fetchEventsSuccess(count, events))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_EVENTS_FAILURE', () => {
    const error = new Error('Fetch events failed.')
    const state = reducer(undefined, actions.fetchEventsFailure(error))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_EVENT_DETAILS_SUCCESS', () => {
    const eventDetails = {
      id: 1,
      UserId: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: 'a5dfd8',
      image: null,
      createdAt: '2016-10-26T07:06:39.152Z',
      updatedAt: '2016-10-26T07:06:39.152Z'
    }
    const state = reducer(undefined, actions.fetchEventDetailsSuccess(eventDetails))
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_EVENT_DETAILS_FAILURE', () => {
    const error = new Error('Fetch event details failure')
    const state = reducer(undefined, actions.fetchEventDetailsFailure(error))
    expect(state).toMatchSnapshot()
  })

  it('should handle INCREASE_PAGE', () => {
    const state = reducer(undefined, actions.increasePage())
    expect(state).toMatchSnapshot()
  })
})
