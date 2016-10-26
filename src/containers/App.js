/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import AppMenu from '../components/AppMenu'
import Notifications from './Notifications'
import * as actionCreators from '../actions/auth'

class App extends Component {

  state: {
    menuOpened: boolean
  }

  constructor(props) {
    super(props)
    this.state = {
      menuOpened: false
    }
  }

  handleMenuToggle = () => {
    console.log('handleMenuToggle')
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  handleMenuRequestChange = opened => {
    this.setState({
      menuOpened: opened
    })
  }

  navigateToLogin = () => {
    this.props.router.push('/login')
  }

  render() {
    const { isAuthenticated, children } = this.props

    const iconElementRight = isAuthenticated
      ? (<FlatButton label="Logout" onClick={this.props.actions.logout} />)
      : (<FlatButton label="Login" onClick={this.navigateToLogin} />);

    return (
      <div>
        <AppBar
          title="Front"
          onLeftIconButtonTouchTap={this.handleMenuToggle}
          iconElementRight={iconElementRight}
          zDepth={0} />
        <AppMenu
          opened={this.state.menuOpened}
          onRequestChange={this.handleMenuRequestChange} />
        <div>{children}</div>
        <Notifications />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
