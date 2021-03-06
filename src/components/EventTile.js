// @flow

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import LazyImage from './LazyImage'
import { IMG_PREFIX_NANO, IMG_PREFIX_SMALL } from '../config'
import { tile, overlay, text, title, date } from './EventTitle'
import { formatDateTimeShort } from '../dates'

const EventTile = ({ event, ...props }) => (
  <div className={tile} {...props}>
    <LazyImage
      keepAspect={false}
      height={158}
      color={'#' + event.color}
      small={IMG_PREFIX_NANO + event.image}
      image={IMG_PREFIX_SMALL + event.image} />
    <div className={overlay}>
      <Link to={`/event/` + event.id}>
        <div className={text}>
          <div className={title}>{event.title}</div>
          <div className={date}>{formatDateTimeShort(event.dateStart)}</div>
        </div>
      </Link>
    </div>
  </div>
)

EventTile.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventTile
