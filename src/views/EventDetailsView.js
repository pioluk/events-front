// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import fecha from 'fecha'
import Card from 'react-toolbox/lib/card'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import IconLabel from '../components/IconLabel'
import * as actionCreators from '../actions/events'
import { detailsViewWrapper, eventView, eventTitle, progressBar } from './EventDetailsView.scss'
import MapPreview from '../components/MapPreview'
import Comments from '../components/Comments'

class EventDetailsView extends Component {

  eventId: number

  state: {
    event: any
  }

  constructor(props) {
    super(props)
    this.eventId = props.params.id
    this.state = {
      event: {}
    }
  }

  componentWillMount() {
    const event = this.state.event
    if (!event || !event.title) {
      this.props.fetch(this.eventId)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  renderDate = (date: string) => {
    return fecha.format(new Date(date), 'MMM D, YYYY HH:mm')
  }

  renderEvent = (event: any) => {
    return (
      <div className={eventView}>
        <h3 className={eventTitle}>{event.title}</h3>
        <div style={{ display: 'flex', marginTop: 15, marginBottom: 15 }}>
          <div style={{ flex: 1 }}>
            <IconLabel title="From" icon="schedule">{this.renderDate(event.dateStart)}</IconLabel>
          </div>
          <div style={{ flex: 1 }}>
            <IconLabel title="To" icon="schedule">{this.renderDate(event.dateEnd)}</IconLabel>
          </div>
        </div>
        <div>{event.description}</div>
        <Comments comments={[]} onSubmit={this.handleSubmit} />
      </div>
    )
  }

  render() {
    const event = this.props.event

    return (
      <div className={detailsViewWrapper}>
        <Card raised>
          { !!event
              ? this.renderEvent(event)
              : <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
          }
        </Card>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  event: state.events.eventDetails
})

const bindActionCreators = dispatch => ({
  fetch: id => dispatch(actionCreators.fetchEventDetailsReqeust(id))
})

export default connect(mapStateToProps, bindActionCreators)(EventDetailsView)
