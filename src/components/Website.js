// @flow

import React, { PropTypes } from 'react'
import { mr4, valignMiddle } from './Text.scss'

const Website = ({ website }) => (
  <div>
    <i className={`material-icons ${mr4} ${valignMiddle}`}>public</i>
    <a href={`mailto:${website}`} target="_blank">{website}</a>
  </div>
)

Website.propTypes = {
  email: PropTypes.string.isRequired
}

export default Website
