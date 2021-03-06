// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { displayNotification } from '../actions/notifications'

export function requireAuthentication(WrappedComponent: Component<any, any, any>) {
  class AuthenticatedComponent extends Component {

    componentWillMount () {
      this.checkAuth(this.props.isAuthenticated)
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth(nextProps.isAuthenticated)
    }

    checkAuth (isAuthenticated) {
      if (!isAuthenticated) {
        // const redirectAfterLogin = this.props.location.pathname
        this.props.displayNotification('You need to be logged in.')
        this.props.router.push('/login')
      }
    }

    render () {
      return (
        <div>
          { this.props.isAuthenticated
              ? <WrappedComponent {...this.props} />
              : null
          }
        </div>
      )

    }
  }

  const mapStateToProps = state => ({
    token: state.auth.token,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
  })

  const mapDispatchToProps = dispatch => ({
    displayNotification: message => dispatch(displayNotification(message))
  })

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent))
}
