// @flow

import React from 'react'
import fecha from 'fecha'
import Card from 'react-toolbox/lib/card'
import ProgressBar from 'react-toolbox/lib/progress_bar'
import { Button } from 'react-toolbox/lib/button'
import IconLabel from '../components/IconLabel'
import Place from '../components/Place'
import Comments from '../components/Comments'
import Email from '../components/Email'
import Phone from '../components/Phone'
import Website from '../components/Website'
import EventList from '../components/EventList'
import {
  detailsViewWrapper,
  eventView,
  eventTitle,
  progressBar,
  additional,
  additionalColumn,
  nearbyEventsWrapper,
  showNearbyEvents
} from './EventDetails.scss'

const renderDate = (date: string) => {
  return fecha.format(new Date(date), 'MMM D, YYYY HH:mm')
}

const EventDetails = ({ event, comments, totalCount, isLoadingComments, commentCount, nearbyEvents, onAdd, onLoadMore, onShowNearbyEvents }) => (
  <div key={event.id} className={eventView}>
    <h3 className={eventTitle}>{event.title}</h3>
    <div style={{ display: 'flex', marginTop: 15, marginBottom: 15 }}>
      <div style={{ flex: 1 }}>
        <IconLabel title="From" icon="schedule">{renderDate(event.dateStart)}</IconLabel>
      </div>
      <div style={{ flex: 1 }}>
        <IconLabel title="To" icon="schedule">{renderDate(event.dateEnd)}</IconLabel>
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
    <div className={nearbyEventsWrapper}>
      { nearbyEvents == null
          ? <Button className={showNearbyEvents} raised primary onClick={onShowNearbyEvents}>Show events nearby</Button>
          : <div>
              <h4>Nearby events</h4>
              { nearbyEvents.length === 0
                  ? <div>No events found.</div>
                  : <EventList events={nearbyEvents} />
              }
            </div>
      }
    </div>
    <Comments
      comments={comments}
      isLoading={isLoadingComments}
      commentCount={commentCount}
      onAdd={onAdd}
      onLoadMore={onLoadMore} />
  </div>
)

const EventDetailsWrapper = ({ event, comments, isLoadingComments, commentCount, nearbyEvents, onAdd, onLoadMore, onShowNearbyEvents }) => (
  <div className={detailsViewWrapper}>
    <Card raised>
      { !!event
          ? <EventDetails
              event={event}
              comments={comments}
              isLoadingComments={isLoadingComments}
              commentCount={commentCount}
              nearbyEvents={nearbyEvents}
              onAdd={onAdd}
              onLoadMore={onLoadMore}
              onShowNearbyEvents={onShowNearbyEvents} />
          : <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
      }
    </Card>
  </div>
)

export default EventDetailsWrapper
