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
      this.node.style.background = 'rgba(0, 0, 0, 0.2)'
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
            height={320}
            color={this.props.color}
            small={'http://pioluk-event-images-processed.s3-website.eu-central-1.amazonaws.com/nano/' + this.props.image}
            image={'http://pioluk-event-images-processed.s3-website.eu-central-1.amazonaws.com/large/' + this.props.image}
            style={{position: 'absolute', top: 0, left: 0}} />
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
    color: ui.selectedEventColor || '#1976d2',
    image: ui.selectedEventImage
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
