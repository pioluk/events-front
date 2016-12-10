// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import fecha from 'fecha'
import Card from 'react-toolbox/lib/card'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import IconLabel from '../components/IconLabel'
import * as eventActions from '../actions/events'
import * as commentActions from '../actions/comments'
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
      this.props.fetchEvent(this.eventId)
    }
    this.props.fetchComments(this.eventId)
  }

  handleAdd = (text) => {
    this.props.addComment(this.eventId, text)
  }

  renderDate = (date: string) => {
    return fecha.format(new Date(date), 'MMM D, YYYY HH:mm')
  }

  renderEvent = (event: any, comments: any[], isLoadingComments: boolean) => {
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
        <Comments comments={comments} isLoading={isLoadingComments} onAdd={this.handleAdd} />
      </div>
    )
  }

  render() {
    const { event, comments, isLoadingComments } = this.props

    return (
      <div className={detailsViewWrapper}>
        <Card raised>
          { !!event
              ? this.renderEvent(event, comments, isLoadingComments)
              : <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
          }
        </Card>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  event: state.events.eventDetails,
  comments: state.comments.comments,
  isLoadingComments: state.comments.isLoading
})

const bindActionCreators = dispatch => ({
  fetchEvent: id => dispatch(eventActions.fetchEventDetailsReqeust(id)),
  fetchComments: id => dispatch(commentActions.fetchComments(id, 20, 0)),
  addComment: (id, text) => dispatch(commentActions.addComment(id, text))
})

export default connect(mapStateToProps, bindActionCreators)(EventDetailsView)
