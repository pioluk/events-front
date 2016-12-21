// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EVENT_PAGE_SIZE } from '../config'
import { searchEvents, searchEventsReset } from '../actions/search'
import Search from '../components/Search'

class SearchView extends Component {

  query = ''

  handleSearch = (query: string) => {
    this.query = query
    this.props.searchEventsReset()
    this.props.searchEvents(1, query)
  }

  handleLoadMore = () => {
    const page = this.props.page
    this.props.searchEvents(page + 1, this.query)
  }

  render () {
    return (
      <Search
        count={this.props.count}
        events={this.props.events}
        isLoading={this.props.isLoading}
        totalCount={this.props.totalCount}
        onLoadMore={this.handleLoadMore}
        onSearch={this.handleSearch} />
    )
  }

}

const mapStateToProps = ({ search }) => ({
  count: search.count,
  events: search.events,
  isLoading: search.isLoading,
  page: search.count / EVENT_PAGE_SIZE,
  totalCount: search.totalCount
})

const mapDispatchToProps = (dispatch: any) => ({
  searchEventsReset: () => dispatch(searchEventsReset()),
  searchEvents: (page: number, query: string) => dispatch(searchEvents(page, query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
