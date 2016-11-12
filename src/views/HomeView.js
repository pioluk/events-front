/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { GridList, GridTile } from 'material-ui/GridList'

import LazyImage from '../components/LazyImage'
import Fab from '../components/Fab'

import * as actionCreators from '../actions/events'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    margin: '0 auto'
    // height: 450,
    // overflowY: 'auto',
  }
}

class HomeView extends Component {

  componentWillMount() {
    this.props.actions.fetchEventsRequest()
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
              key={event.id}
              title={<Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/event/${event.id}`}>{event.title}</Link>}>
              <LazyImage
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
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
