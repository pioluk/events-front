// @flow

import React from 'react'
import MapPreview from '../components/MapPreview'
import { wrapper } from './Place.scss'
import { mr4, valignMiddle } from './Text.scss'

const Place = ({ place }) => (
  <div className={wrapper}>
    <i className={`material-icons ${mr4} ${valignMiddle}`}>place</i>
    {place.name}
    <MapPreview lat={place.lat} lng={place.lng} width={620} height={250} />
  </div>
)

export default Place
