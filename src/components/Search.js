// @flow

import React from 'react'
import styled from 'styled-components'
import SearchForm from './SearchForm'
import EventList from './EventList'
import LoadMoreButton from './LoadMoreButton'

const EventListWrapper = styled.div`
  padding-top: 20px;
  min-width: 400px;
  max-width: 920px;
  margin: 0 auto;
`

const Search = ({ count, events, isLoading, totalCount, onLoadMore, onSearch }) => (
  <div>
    <SearchForm onSearch={onSearch} />
    <EventListWrapper>
      <EventList events={events} />
      { count < totalCount
        && <LoadMoreButton loading={isLoading} onClick={onLoadMore} />
      }
    </EventListWrapper>
  </div>
)

export default Search
