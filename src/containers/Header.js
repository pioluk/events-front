// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import AppBar from '../components/AppBar'
import AppMenu from '../components/AppMenu'
import LazyImage from '../components/LazyImage'
import * as actionCreators from '../actions/auth'

class Header extends Component {

  state: {
    menuOpened: boolean
  }

  state = {
    menuOpened: false
  }

  node = null

  componentDidMount() {
    window.appbar = this.node = document.querySelector('[data-react-toolbox="app-bar"]')
    console.log('componentDidMount', !!this.node)
  }

  navigateToLogin = () => {
    this.props.router.push('/login')
  }

  handleMenuToggle = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render() {
    const { isAuthenticated, isEventDetails } = this.props

    if (isEventDetails && this.node !== null) {
      this.node.style.background = 'none'
    } else if (this.node !== null) {
      this.node.style.background = null
    }

    return (
      <div>
        <AppBar
          isAuthenticated={isAuthenticated}
          onMenuToggle={this.handleMenuToggle}
          onLoginClick={this.navigateToLogin}
          onLogoutClick={this.props.actions.logout}>
        </AppBar>
        { isEventDetails &&
          <LazyImage
            keepAspect={false}
            width="100%"
            height={220}
            color={this.props.color}
            small={'data:image/jpeg;base64,' + this.props.thumbnail}
            image={this.props.image}
            style={{position: 'fixed', top: 0, left: 0}} />
          }
        <AppMenu
          opened={this.state.menuOpened}
          onRequestChange={this.handleMenuToggle} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  const ui = state.ui
  const pathname = state.routing.locationBeforeTransitions.pathname
  const isEventDetails =
    pathname !== '/event/new' && pathname.indexOf('/event/') === 0

  return {
    isEventDetails,
    isAuthenticated: state.auth.isAuthenticated,
    color: ui.selectedEventColor,
    thumbnail: ui.selectedEventThumbnail,
    image: ui.selectedEventImage
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
