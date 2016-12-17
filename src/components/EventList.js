// @flow

import React, { Component, PropTypes } from 'react'
import EventTile from './EventTile'
import { gridList } from './EventList.scss'

export default class EventList extends Component {

  state: { layout: any }

  static propTypes = {
    events: PropTypes.array.isRequired
  }

  render () {
    const { events } = this.props

    return (
      <div className={gridList}>
        {events.map(event =>
          <EventTile key={event.id} event={event} />
        )}
      </div>
    )
  }

}
