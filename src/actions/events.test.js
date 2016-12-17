// global describe,it,expect

import * as actions from './events'

describe('events actions', () => {
  it('should create an action to fetch events', () => {
    expect(actions.fetchEventsRequest(1)).toMatchSnapshot()
  })

  it('should create an action to send fetched events', () => {
    const events = [
      {
        id: 1,
        UserId: 1,
        title: 'nihil voluptas rerum',
        description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
        dateStart: '2016-05-23T17:38:11.010Z',
        dateEnd: '2016-12-06T02:03:56.063Z',
        color: '#a5dfd8',
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
        createdAt: '2016-10-26T07:06:40.243Z',
        updatedAt: '2016-10-26T07:06:40.243Z'
      }
    ]
    expect(actions.fetchEventsSuccess(events)).toMatchSnapshot()
  })

  it('should create an action to indicate event fetching error', () => {
    const error = new Error('Error fetching error')
    expect(actions.fetchEventsFailure(error)).toMatchSnapshot()
  })

  it('should create an action to request creation of a new event', () => {
    const event = {
      id: 1,
      UserId: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: '#a5dfd8',
      createdAt: '2016-10-26T07:06:39.152Z',
      updatedAt: '2016-10-26T07:06:39.152Z'
    }
    expect(actions.addEvent(event)).toMatchSnapshot()
  })

  it('should create an action to add a new event', () => {
    const event = {
      id: 1,
      UserId: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: '#a5dfd8',
      createdAt: '2016-10-26T07:06:39.152Z',
      updatedAt: '2016-10-26T07:06:39.152Z'
    }
    expect(actions.addEventSuccess(event)).toMatchSnapshot()
  })

  it('should create an action to indicate an event creation error', () => {
    const error = new Error('Event creation error.')
    expect(actions.addEventFailure(error)).toMatchSnapshot()
  })

  it('should create an action to fetch event\'s details', () => {
    const eventId = 1
    expect(actions.fetchEventDetailsReqeust(eventId)).toMatchSnapshot()
  })

  it('should create an action to pass event details', () => {
    const eventDetails = {
      id: 1,
      UserId: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: '#a5dfd8',
      createdAt: '2016-10-26T07:06:39.152Z',
      updatedAt: '2016-10-26T07:06:39.152Z'
    }
    expect(actions.fetchEventDetailsSuccess(eventDetails)).toMatchSnapshot()
  })

  it('should create an action to indicate event\'s details fetching error', () => {
    const error = new Error('Event details fetching failed.')
    expect(actions.fetchEventDetailsFailure(error)).toMatchSnapshot()
  })

  it('should create an action to increase page', () => {
    expect(actions.increasePage()).toMatchSnapshot()
  })

  it('shoould create an action to reset nearby events', () => {
    expect(actions.resetEventsNearby()).toMatchSnapshot()
  })

  it('should create an action to fetch nearby events', () => {
    const eventId = 1
    expect(actions.fetchEventsNearby(eventId)).toMatchSnapshot()
  })

  it('should create an action to send nearby events', () => {
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
    expect(actions.fetchEventsNearbySuccess(events)).toMatchSnapshot()
  })
})
