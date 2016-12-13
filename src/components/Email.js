// @flow

import React, { PropTypes } from 'react'
import { mr4, valignMiddle } from './Text.scss'

const Email = ({ email }) => (
  <div>
    <i className={`material-icons ${mr4} ${valignMiddle}`}>email</i>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
)

Email.propTypes = {
  email: PropTypes.string.isRequired
}

export default Email
