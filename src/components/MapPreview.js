// @flow

import React from 'react'

const MapPreview = ({ lat, long, width, height, zoom }) => (
  <div>
    <a href={`https://maps.google.com/maps?q=${lat},${long}&z=${zoom}`} target="_blank">
      <img src={`https://maps.googleapis.com/maps/api/staticmap?markers=${lat},${long}&size=${width}x${height}&zoom=${zoom}`} alt="Map" />
    </a>
  </div>
)

MapPreview.defaultProps = {
  zoom: 12
}

export default MapPreview
