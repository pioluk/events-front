// @flow

import React, { PropTypes } from 'react'
import RTAppBar from 'react-toolbox/lib/app_bar'
import Button from 'react-toolbox/lib/button'

import { button, right } from './AppBar.scss'

const AppBar = ({ onMenuToggle, isAuthenticated, onLoginClick, onLogoutClick, ...props }) => (
  <RTAppBar
      flat
      leftIcon="menu"
      onLeftIconClick={onMenuToggle}
      {...props}>
    Front
    <div className={right}>
      { isAuthenticated
          ? <Button className={button} label="Logout" onClick={onLogoutClick} />
          : <Button className={button} label="Login" onClick={onLoginClick} />
      }
    </div>
  </RTAppBar>
)

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
}

export default AppBar
