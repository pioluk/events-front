// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import fecha from 'fecha'
import Card from 'react-toolbox/lib/card'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import IconLabel from '../components/IconLabel'
import * as eventActions from '../actions/events'
import * as commentActions from '../actions/comments'
import { detailsViewWrapper, eventView, eventTitle, progressBar, additional, additionalColumn } from './EventDetailsView.scss'
import Place from '../components/Place'
import Comments from '../components/Comments'
import Email from '../components/Email'
import Phone from '../components/Phone'
import Website from '../components/Website'
import { COMMENT_PAGE_SIZE } from '../config'

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

  loadComments = () => {
    this.props.fetchComments(this.eventId, this.props.page + 1)
  }

  handleAdd = (text) => {
    this.props.addComment(this.eventId, text)
  }

  renderDate = (date: string) => {
    return fecha.format(new Date(date), 'MMM D, YYYY HH:mm')
  }

  renderEvent = (event: any, comments: any[], commentCount: number, isLoadingComments: boolean) => {
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
        <Place place={event.Place} />
        <div className={additional}>
          <div className={additionalColumn}>
            {event.Emails.map(email => <Email key={email.id} email={email.address} />)}
          </div>
          <div className={additionalColumn}>
            {event.Phones.map(phone => <Phone key={phone.id} phone={phone.number} />)}
          </div>
          <div className={additionalColumn}>
            {event.Websites.map(website => <Website key={website.id} website={website.address} />)}
          </div>
        </div>
        <div>{event.description}</div>
        <Comments
          comments={comments}
          isLoading={isLoadingComments}
          commentCount={commentCount}
          onAdd={this.handleAdd}
          onLoadMore={this.loadComments} />
      </div>
    )
  }

  render() {
    const { event, comments, totalCount, isLoadingComments } = this.props

    return (
      <div className={detailsViewWrapper}>
        <Card raised>
          { !!event
              ? this.renderEvent(event, comments, totalCount, isLoadingComments)
              : <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
          }
        </Card>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  page: (state.comments.commentCount / COMMENT_PAGE_SIZE) | 0,
  event: state.events.eventDetails,
  comments: state.comments.comments,
  totalCount: state.comments.totalCount,
  isLoadingComments: state.comments.isLoading
})

const bindActionCreators = dispatch => ({
  fetchEvent: id => dispatch(eventActions.fetchEventDetailsReqeust(id)),
  fetchComments: (id, page) => dispatch(commentActions.fetchComments(id, page)),
  addComment: (id, text) => dispatch(commentActions.addComment(id, text))
})

export default connect(mapStateToProps, bindActionCreators)(EventDetailsView)
