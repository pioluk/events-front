// @flow

import React, { Component, PropTypes } from 'react'
import EventTile from './EventTile'
import NoEvents from './NoEvents'
import { gridList } from './EventList.scss'

export default class EventList extends Component {

  state: { layout: any }

  static propTypes = {
    events: PropTypes.array.isRequired
  }

  render () {
    const { events } = this.props
    const isEventsEmpty = events.length === 0

    return (
      <div className={gridList}>
        {isEventsEmpty
          && <NoEvents />
        }
        {events.map(event =>
          <EventTile key={event.id} event={event} />
        )}
      </div>
    )
  }

}
