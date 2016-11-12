/* @flow */

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Drawer from 'react-toolbox/lib/drawer'
import { MenuItem } from 'react-toolbox/lib/menu'

import { menuItem } from './AppMenu.scss'

const AlignedMenuItem = ({ children }) =>
  <MenuItem className={menuItem}>{children}</MenuItem>

const AppMenu = ({ opened, onRequestChange }) => (
  <Drawer
    active={opened}
    onOverlayClick={onRequestChange}>
    <Link to="/">
      <AlignedMenuItem>Home</AlignedMenuItem>
    </Link>
  </Drawer>
)

AppMenu.propTypes = {
  opened: PropTypes.bool.isRequired
}

export default AppMenu
