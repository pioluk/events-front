// @flow

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import RTAppBar from 'react-toolbox/lib/app_bar'
import { Button, IconButton } from 'react-toolbox/lib/button'

import { button, right } from './AppBar.scss'

const AppBar = ({ onMenuToggle, isAuthenticated, onLoginClick, onLogoutClick, children, ...props }) => (
  <RTAppBar
      flat
      leftIcon="menu"
      onLeftIconClick={onMenuToggle}
      {...props}>
    Event
    <div className={right}>
      <Link to="/search">
        <IconButton style={{ color: 'white' }} icon="search" raised />
      </Link>
      { isAuthenticated
          ? <Button className={button} label="Logout" onClick={onLogoutClick} />
          : <Button className={button} label="Login" onClick={onLoginClick} />
      }
    </div>
    <div>{children}</div>
  </RTAppBar>
)

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
}

export default AppBar
