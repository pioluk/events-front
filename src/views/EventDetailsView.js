// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-toolbox/lib/card'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import * as actionCreators from '../actions/events'

import { eventWrapper, card, progressBar } from './EventDetailsView.scss'

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

  renderEvent = (event: any) => {
    return (
      <div>
        <h3>{event.title}</h3>
      </div>
    )
  }

  render() {
    const event = this.props.event

    return (
      <div style={{ marginTop: 65 }}>
        <Card raised className={card}>
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
