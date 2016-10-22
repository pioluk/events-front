/* @flow */

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const AppMenu = ({ opened, onRequestChange }) => (
  <Drawer
    docked={false}
    open={opened}
    onRequestChange={onRequestChange}>
    <Link to="/">
      <MenuItem>Home</MenuItem>
    </Link>
  </Drawer>
)

AppMenu.propTypes = {
  opened: PropTypes.bool.isRequired
}

export default AppMenu
