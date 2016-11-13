// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/events'

class EventDetailsView extends Component {

  eventId: number

  state: {
    event: any
  }

  constructor(props) {
    super(props)
    this.eventId = props.params.id
    this.state = {
      event: null
    }
  }

  componentWillMount() {
    this.props.fetch(this.eventId)
    if (!this.state.event) {
      //
    }
  }

  render() {
    const eventId = this.props.params.id;

    return (
      <div>
        EventDetailsView #{eventId}
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
