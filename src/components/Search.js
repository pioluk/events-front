// @flow

import React from 'react'
import styled from 'styled-components'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import SearchForm from './SearchForm'
import EventList from './EventList'
import NoEvents from './NoEvents'
import LoadMoreButton from './LoadMoreButton'
import { progressBar } from './Search.scss'

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
      { isLoading && count === 0
          && <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
      }
      { !isLoading && count === 0
          && <NoEvents />
      }
      <EventList events={events} />
      { count < totalCount
          && <LoadMoreButton loading={isLoading} onClick={onLoadMore} />
      }
    </EventListWrapper>
  </div>
)

export default Search
