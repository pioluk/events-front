/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import * as actionCreators from '../actions/auth'

class App extends Component {

  constructor(props) {
    super(props)
  }

  navigateToLogin = () => {
    this.props.router.push('/login')
  }

  render() {
    const { isAuthenticated, children } = this.props

    const iconElementRight = isAuthenticated
      ? (<FlatButton label="Logout" />)
      : (<FlatButton label="Login" onClick={this.navigateToLogin} />);

    return (
      <div>
        <AppBar
          title="Front"
          iconElementRight={iconElementRight}
          zDepth={0} />
        <div>{children}</div>
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
