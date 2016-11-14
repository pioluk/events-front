// @flow

import React from 'react'
import FontIcon from 'react-toolbox/lib/font_icon'

import * as classNames from './IconLabel.scss'

const IconLabel = ({ icon, title, children, ...props }) => (
  <div className={classNames.root} {...props}>
    <FontIcon className={classNames.fontIcon} value={icon} />
    <h5 className={classNames.title}>{title}</h5>
    {children}
  </div>
)

export default IconLabel
