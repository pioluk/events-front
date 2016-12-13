// @flow

import React from 'react'
import { wrapper, image } from './MapPreview.scss'

const MapPreview = ({ lat, lng, width, height, zoom }) => (
  <div className={wrapper}>
    <a href={`https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}`} target="_blank">
      <img className={image} src={`https://maps.googleapis.com/maps/api/staticmap?markers=${lat},${lng}&size=${width}x${height}&zoom=${zoom}&key=AIzaSyC5AKeskTMDeunXqN3i55hnEUsu7vSQ7FE`} alt="Map" />
    </a>
  </div>
)

MapPreview.defaultProps = {
  zoom: 12
}

export default MapPreview
