// global describe,it,expect

import * as actions from './events'

describe('events actions', () => {
  it('should create an action to fetch events', () => {
    expect(actions.fetchEventsRequest()).toMatchSnapshot()
  })

  it('should create an action to send fetched events', () => {
    const events = [
      {
        "id": 1,
        "UserId": 1,
        "title": "nihil voluptas rerum",
        "description": "Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.",
        "dateStart": "2016-05-23T17:38:11.010Z",
        "dateEnd": "2016-12-06T02:03:56.063Z",
        "color": "a5dfd8",
        "createdAt": "2016-10-26T07:06:39.152Z",
        "updatedAt": "2016-10-26T07:06:39.152Z"
      },
      {
        "id": 2,
        "UserId": 1,
        "title": "voluptatem eos nostrum",
        "description": "Sequi sit minima quae totam dolores suscipit. Vero exercitationem repellendus velit. Earum ullam unde explicabo earum. Corporis architecto ab quisquam consectetur. Odio odit aliquid ex sint consequatur similique. Aut et occaecati saepe rem cupiditate et veritatis aut. Similique molestias eveniet libero labore est laboriosam. Molestiae reiciendis error neque dignissimos.",
        "dateStart": "2016-07-04T18:33:59.969Z",
        "dateEnd": "2017-08-27T03:37:53.566Z",
        "color": "33ed3f",
        "createdAt": "2016-10-26T07:06:40.243Z",
        "updatedAt": "2016-10-26T07:06:40.243Z"
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
      "id": 1,
      "UserId": 1,
      "title": "nihil voluptas rerum",
      "description": "Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.",
      "dateStart": "2016-05-23T17:38:11.010Z",
      "dateEnd": "2016-12-06T02:03:56.063Z",
      "color": "a5dfd8",
      "createdAt": "2016-10-26T07:06:39.152Z",
      "updatedAt": "2016-10-26T07:06:39.152Z"
    }
    expect(actions.addEvent(event)).toMatchSnapshot()
  })

  it('should create an action to add a new event', () => {
    const event = {
      "id": 1,
      "UserId": 1,
      "title": "nihil voluptas rerum",
      "description": "Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.",
      "dateStart": "2016-05-23T17:38:11.010Z",
      "dateEnd": "2016-12-06T02:03:56.063Z",
      "color": "a5dfd8",
      "createdAt": "2016-10-26T07:06:39.152Z",
      "updatedAt": "2016-10-26T07:06:39.152Z"
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
      "id": 1,
      "UserId": 1,
      "title": "nihil voluptas rerum",
      "description": "Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.",
      "dateStart": "2016-05-23T17:38:11.010Z",
      "dateEnd": "2016-12-06T02:03:56.063Z",
      "color": "a5dfd8",
      "createdAt": "2016-10-26T07:06:39.152Z",
      "updatedAt": "2016-10-26T07:06:39.152Z"
    }
    expect(actions.fetchEventDetailsSuccess(eventDetails)).toMatchSnapshot()
  })

  it('should create an action to indicate event\'s details fetching error', () => {
    const error = new Error('Event details fetching failed.')
    expect(actions.fetchEventDetailsFailure(error)).toMatchSnapshot()
  })
})
