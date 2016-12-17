// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as eventActions from '../actions/events'
import * as commentActions from '../actions/comments'
import { COMMENT_PAGE_SIZE } from '../config'
import EventDetails from '../components/EventDetails'

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
      this.props.fetchEvent(this.eventId)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.eventId = nextProps.params.id
      this.props.fetchEvent(this.eventId)
    }
  }

  loadComments = () => {
    this.props.fetchComments(this.eventId, this.props.page + 1)
  }

  handleAdd = (text) => {
    this.props.addComment(this.eventId, text)
  }

  loadNearbyEvents = () => {
    this.props.fetchNearbyEvents(this.eventId)
  }

  render() {
    const { event, comments, totalCount, nearbyEvents, isLoadingComments } = this.props

    return (
      <EventDetails
        event={event}
        comments={comments}
        commentCount={totalCount}
        isLoadingComments={isLoadingComments}
        nearbyEvents={nearbyEvents}
        onAdd={this.handleAdd}
        onLoadMore={this.loadComments}
        onShowNearbyEvents={this.loadNearbyEvents} />
    )
  }

}

const mapStateToProps = state => ({
  page: (state.comments.commentCount / COMMENT_PAGE_SIZE) | 0,
  event: state.events.eventDetails,
  comments: state.comments.comments,
  totalCount: state.comments.totalCount,
  isLoadingComments: state.comments.isLoading,
  nearbyEvents: state.events.nearbyEvents
})

const bindActionCreators = dispatch => ({
  fetchEvent: id => dispatch(eventActions.fetchEventDetailsReqeust(id)),
  fetchComments: (id, page) => dispatch(commentActions.fetchComments(id, page)),
  addComment: (id, text) => dispatch(commentActions.addComment(id, text)),
  fetchNearbyEvents: id => dispatch(eventActions.fetchEventsNearby(id)),
})

export default withRouter(connect(mapStateToProps, bindActionCreators)(EventDetailsView))
