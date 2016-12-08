// global describe,it,expect

import { getEventsFlow, getEventDetailsFlow, createEventFlow } from './events'
import { call, put, take } from 'redux-saga/effects'
import { FETCH_EVENTS_REQUEST, FETCH_EVENT_DETAILS_REQUEST, ADD_EVENT } from '../constants/events'
import { getEvents, getEvent, createEvent } from '../api/events'
import * as eventActions from '../actions/events'
import { selectEvent } from '../actions/ui'

describe('events sagas', () => {
  it('getEventsFlow success', () => {
    const generator = getEventsFlow()

    expect(generator.next().value).toEqual(take(FETCH_EVENTS_REQUEST))

    expect(generator.next().value).toEqual(call(getEvents))

    const count = 3
    const events = [{ id: 1 }, { id: 2 }, { id: 3 }]

    expect(generator.next({ count, events }).value)
      .toEqual(put(eventActions.fetchEventsSuccess(count, events)))

    expect(generator.next().value).toEqual(take(FETCH_EVENTS_REQUEST))
  })

  it('getEventsFlow failure', () => {
    const generator = getEventsFlow()

    expect(generator.next().value).toEqual(take(FETCH_EVENTS_REQUEST))

    expect(generator.next().value).toEqual(call(getEvents))

    const error = new Error('Error fetching events.')
    expect(generator.throw(error).value).toEqual(put(eventActions.fetchEventsFailure(error)))
  })

  it('getEventDetailsFlow success', () => {
    const generator = getEventDetailsFlow()
    expect(generator.next().value).toEqual(take(FETCH_EVENT_DETAILS_REQUEST))

    const eventId = 1
    expect(generator.next({ eventId }).value).toEqual(call(getEvent, eventId))

    const eventDetails = {
      id: 1,
      UserId: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: 'a5dfd8',
      image: undefined,
      createdAt: '2016-10-26T07:06:39.152Z',
      updatedAt: '2016-10-26T07:06:39.152Z'
    }
    expect(generator.next(eventDetails).value)
      .toEqual(put(eventActions.fetchEventDetailsSuccess(eventDetails)))

    expect(generator.next().value)
      .toEqual(put(selectEvent('#' + eventDetails.color, eventDetails.imageThumbnail, eventDetails.imageBig)))

    expect(generator.next().value).toEqual(take(FETCH_EVENT_DETAILS_REQUEST))
  })

  it('getEventDetailsFlow success', () => {
    const generator = getEventDetailsFlow()

    expect(generator.next().value).toEqual(take(FETCH_EVENT_DETAILS_REQUEST))

    const eventId = 1
    expect(generator.next({ eventId }).value).toEqual(call(getEvent, eventId))

    const error = new Error('Error fetching event.')
    expect(generator.throw(error).value).toEqual(put(eventActions.fetchEventDetailsFailure(error)))

    expect(generator.next().value).toEqual(take(FETCH_EVENT_DETAILS_REQUEST))
  })

  it('createEventFlow success', () => {
    const generator = createEventFlow()

    expect(generator.next().value).toEqual(take(ADD_EVENT))

    const event = {
      id: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: 'a5dfd8',
      image: undefined
    }
    expect(generator.next({ event }).value).toEqual(call(createEvent, event))

    expect(generator.next().value).toEqual(put(eventActions.addEventSuccess()))

    expect(generator.next().value).toEqual(take(ADD_EVENT))
  })

  it('createEventFlow failure', () => {
    const generator = createEventFlow()

    expect(generator.next().value).toEqual(take(ADD_EVENT))

    const event = {
      id: 1,
      title: 'nihil voluptas rerum',
      description: 'Ut ut ipsam. Hic voluptas illo ex voluptatibus dolores aut sed beatae vel. Quo fuga cum animi est voluptatem. Animi numquam magni. Ut labore deleniti tenetur nulla magnam maxime enim. Molestiae omnis harum id sequi accusantium tempora. Tempore est dolorem nesciunt voluptatem quaerat qui dolorum non. Praesentium perferendis ut.',
      dateStart: '2016-05-23T17:38:11.010Z',
      dateEnd: '2016-12-06T02:03:56.063Z',
      color: 'a5dfd8',
      image: undefined
    }

    const error = new Error('Event creation failed')
    expect(generator.next({ event }).value).toEqual(call(createEvent, event))

    expect(generator.throw(error).value).toEqual(put(eventActions.addEventFailure(error)))

    expect(generator.next().value).toEqual(take(ADD_EVENT))
  })
})
