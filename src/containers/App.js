/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import AppBar from 'react-toolbox/lib/app_bar'
import FlatButton from 'material-ui/FlatButton'

import AppBar from '../components/AppBar'
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

  handleMenuRequestChange = () => {
    this.setState(state => ({
      menuOpened: !state.menuOpened
    }))
  }

  navigateToLogin = () => {
    this.props.router.push('/login')
  }

  render() {
    const { isAuthenticated, children } = this.props

    return (
      <div>
        <AppBar
          isAuthenticated={isAuthenticated}
          onMenuToggle={this.handleMenuToggle}
          onLoginClick={this.navigateToLogin}
          onLogoutClick={this.props.actions.logout} />
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
