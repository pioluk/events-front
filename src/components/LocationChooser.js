/* global google,geocoder */

// @flow

/**
 * https://maps.googleapis.com/maps/api/staticmap?markers=51.71806908819125,19.14964199066162&size=600x300&zoom=12
 */

import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

const INPUT_STYLE = {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  border: '1px solid transparent',
  width: '240px',
  height: '32px',
  marginTop: '27px',
  padding: '0 12px',
  borderRadius: '1px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  fontSize: '14px',
  outline: 'none',
  textOverflow: 'ellipses',
}

const LocationChooser = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    onClick={props.onMapClick}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Search Location"
      inputStyle={INPUT_STYLE} />
    {props.marker && (
      <Marker position={props.marker.position} />
    )}
  </GoogleMap>
))

export default class LocationChooserWrapper extends Component {

  state = {
    bounds: null,
    center: {
      lat: 47.6205588,
      lng: -122.3212725,
    },
    marker: null,
    name: '',
    placeId: ''
  }

  map = null
  searchBox = null
  geocoder = new google.maps.Geocoder()

  emitChange = () => {
    const { name, placeId } = this.state
    const position = this.state.marker.position
    const lat = position.lat()
    const lng = position.lng()
    typeof this.props.onChange === 'function'
      && this.props.onChange({ name, lat, lng, placeId })
  }

  handleMapMounted = (map: any) => {
    this.map = map
  }

  handleBoundsChanged = () => {
    this.setState({
      bounds: this.map.getBounds(),
      center: this.map.getCenter(),
    })
  }

  handleSearchBoxMounted = (searchBox) => {
    this.searchBox = searchBox
  }

  handlePlacesChanged = () => {
    const places = this.searchBox.getPlaces()

    if (places.length > 0) {
      const position = places[0].geometry.location
      const marker = { position }
      const mapCenter = position

      this.setState({
        center: mapCenter,
        marker,
      }, this.emitChange)
      this.fetchLocationName(position)
    }

  }

  handleMapClick = (e: any) => {
    const position = e.latLng
    this.setState({ marker: { position } }, this.emitChange)
    this.fetchLocationName(position)
  }

  fetchLocationName = (position) => {
    this.geocoder.geocode({ location: position }, (results, status) => {
      console.log(results)
      if (status === 'OK' && results.length > 0) {
        const first = results[0]
        this.setState({ name: first.formatted_address, placeId: first.place_id }, this.emitChange)
      } else {
        console.error('Location could not be identified')
      }
    })
  }

  render() {
    return (
      <LocationChooser
        containerElement={
          <div id="containerElement" style={{ height: 420 }} />
        }
        mapElement={
          <div id="mapElement" style={{ height: '100%' }} />
        }
        center={this.state.center}
        onMapMounted={this.handleMapMounted}
        onMapClick={this.handleMapClick}
        onBoundsChanged={this.handleBoundsChanged}
        onSearchBoxMounted={this.handleSearchBoxMounted}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        marker={this.state.marker}
      />
    )
  }
}
