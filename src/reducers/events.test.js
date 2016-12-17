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
        color: '#a5dfd8',
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
        color: '#33ed3f',
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
      color: '#a5dfd8',
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

  it('should handle RESET_EVENTS_NEARBY', () => {
    const initialState = reducer(undefined, { type: '' })
    initialState.eventsNearby = [{ id: 1 }, { id: 2 }]
    const state = reducer(initialState, actions.resetEventsNearby())
    expect(state).toMatchSnapshot()
  })

  it('should handle FETCH_EVENTS_NEARBY_SUCCESS', () => {
    const events = [
      {
        id: 2178,
        UserId: 1,
        title: 'Dolores eveniet asperiores optio.',
        description: 'Aut voluptatem dolor molestiae aspernatur voluptatem. Sit non et provident facilis ea nisi est quaerat numquam. Voluptatem debitis ducimus accusantium error repellat illo veniam. Voluptas ducimus et iste placeat magnam ad asperiores error atque. Unde voluptatem est reiciendis cumque et deserunt at. Dolor repellat vel et qui suscipit dolorem. Ea sequi tenetur sint ab omnis. Vitae consequatur impedit aperiam harum et necessitatibus aliquam. Dolores eaque sint voluptate saepe ducimus iure saepe. Voluptatem accusamus molestias iure blanditiis rerum dolores in harum. Id ut nesciunt consequuntur cum quia officiis. Rerum quibusdam vitae odit dolores architecto sunt minima nihil reiciendis. Aut laborum enim totam sed quo libero harum tempora. Perferendis est voluptatum aspernatur quisquam eum architecto amet corrupti. Atque nobis vel dolor. Voluptatem consequatur rerum dolor.',
        dateStart: '2016-12-17T16:22:59.335Z',
        dateEnd: '2016-12-17T18:22:59.335Z',
        PlaceId: 2178,
        color: '#017778',
        image: '378b6f77-bbed-443b-8e3f-ad738fb98c8e.jpg',
        createdAt: '2016-12-15T13:17:52.972Z',
        updatedAt: '2016-12-15T13:17:52.972Z',
        deletedAt: null,
        distance: 0
      },
      {
        id: 2996,
        UserId: 1,
        title: 'Iure nemo qui omnis.',
        description: 'Officiis explicabo cum iure cumque minima impedit. Nesciunt expedita ipsum. Aliquid vero labore molestias. Voluptatum aut quod repellendus numquam veritatis aut nihil. Dolorem facilis eius sit laudantium quia sunt ratione praesentium voluptates. Ut qui eaque dolores expedita et. Error minus occaecati veniam illum. Voluptas porro ipsam facere odit. Molestias unde veritatis placeat. Ex consequatur a qui eum et id nihil ex. Facere aliquid veritatis est cupiditate qui. Ut impedit quasi. Et ipsa aliquam et rem quia commodi aspernatur fugit laudantium. Explicabo a doloribus. Distinctio repellendus dolor. Possimus cumque eligendi dolor alias.',
        dateStart: '2016-12-26T05:36:56.574Z',
        dateEnd: '2016-12-26T07:36:56.574Z',
        PlaceId: 2996,
        color: '#4e625f',
        image: 'b2407517-48e6-4d41-95cb-2779ee7fab17.jpg',
        createdAt: '2016-12-15T13:20:36.589Z',
        updatedAt: '2016-12-15T13:20:36.589Z',
        deletedAt: null,
        distance: 0
      }
    ]
    const state = reducer(undefined, actions.fetchEventsNearbySuccess(events))
    expect(state).toMatchSnapshot()
  })
})
