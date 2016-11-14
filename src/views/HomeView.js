/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router'
import { GridList, GridTile } from 'material-ui/GridList'

import LazyImage from '../components/LazyImage'
import Fab from '../components/Fab'

import { fetchEventsRequest } from '../actions/events'
import { selectEvent } from '../actions/ui'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 900,
    margin: '0 auto'
  }
}

class HomeView extends Component {

  componentWillMount() {
    this.props.fetchEventsRequest()
  }

  navigateToEvent = (event: any) => {
    this.props.router.push(`/event/${event.id}`)
    this.props.selectEvent(event.color, event.imageThumbnail, event.imageBig)
  }

  render() {
    const { events } = this.props

    return(
      <div style={{ padding: 20 }}>
        <h3>HomeView</h3>

        <GridList
          cols={4}
          cellHeight={200}
          style={styles.gridList}>
          {events.map(event =>
            <GridTile
              title={
                <Link
                  style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                  onClick={() => this.navigateToEvent(event)}>
                  {event.title}
                </Link>
              }>
              <LazyImage
                keepAspect={true}
                height={200}
                color={'#' + event.color}
                small={'data:image/jpeg;base64,' + event.imageThumbnail}
                image={event.imageSmall} />
            </GridTile>
           )}
        </GridList>

        <Link to="/event/new">
          <Fab icon="add" label="Add a new event" />
        </Link>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  events: state.events.events
})

const mapDispatchToProps = dispatch => ({
  fetchEventsRequest: () => dispatch(fetchEventsRequest()),
  selectEvent: (color, thumbnail, image) => dispatch(selectEvent(color, thumbnail, image))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeView))
