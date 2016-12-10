/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import EventList from '../components/EventList'
import LoadMoreButton from '../components/LoadMoreButton'
import Fab from '../components/Fab'
import { fetchEventsRequest } from '../actions/events'
import { selectEvent } from '../actions/ui'
import { homeView } from './HomeView.scss'
import { progressBar } from './EventDetailsView.scss'
import { EVENT_PAGE_SIZE } from '../config'

class HomeView extends Component {

  loadEvents = () => {
    this.props.fetchEventsRequest(this.props.page + 1)
  }

  componentWillMount() {
    if (this.props.events.length === 0) {
      this.loadEvents()
    }
  }

  navigateToEvent = (event: any) => {
    this.props.router.push(`/event/${event.id}`)
    this.props.selectEvent(event.color, event.image)
  }

  handleEventClick = (event: any) => {
    this.navigateToEvent(event)
  }

  handleLoadMore = () => {
    this.loadEvents()
  }

  renderList = () => {
    const { events, isLoading, count, eventCount } = this.props

    return (
      <div>
        <EventList events={events} onEventClick={this.handleEventClick} />
        { eventCount < count
            && <LoadMoreButton loading={isLoading} onClick={this.handleLoadMore} />
        }
      </div>

    )
  }

  render() {
    const { events, isLoading, page } = this.props
    console.log('epage', page)

    return(
      <div className={homeView}>
        { isLoading && events.length === 0
            ? <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
            : this.renderList()
        }
        <Link to="/event/new">
          <Fab icon="add" label="Add a new event" />
        </Link>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  page: state.events.eventCount / EVENT_PAGE_SIZE,
  count: state.events.count,
  eventCount: state.events.eventCount,
  events: state.events.events,
  isLoading: state.events.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchEventsRequest: page => dispatch(fetchEventsRequest(page)),
  selectEvent: (color, image) => dispatch(selectEvent(color, image))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeView))
