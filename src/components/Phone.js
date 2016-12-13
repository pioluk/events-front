// @flow

import React, { PropTypes } from 'react'
import { mr4, valignMiddle } from './Text.scss'

const Phone = ({ phone }) => (
  <div>
    <i className={`material-icons ${mr4} ${valignMiddle}`}>phone</i>
    <a href={`tel:${phone}`}>{phone}</a>
  </div>
)

Phone.propTypes = {
  phone: PropTypes.string.isRequired
}

export default Phone
