/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { red500 } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { loginRequest } from '../actions/auth'

const loginViewStyle = {
  maxWidth: 375,
  margin: '50px auto'
}

class LoginView extends Component {
  state: {
    username: string,
    password: string
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = e => {
    const username = e.target.value
    this.setState({ ...this.state, username })
  }

  handlePasswordChange = e => {
    const password = e.target.value
    this.setState({ ...this.state, password })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.loginRequest(username, password)
  }

  render() {
    const { isAuthenticating, errorMessage, loginRequest } = this.props

    return (
      <div style={loginViewStyle}>
        <form onSubmit={this.handleSubmit}>
          <Paper style={{ padding: '3em 2em 2em 3em' }}>
            { !!errorMessage
              && <div style={{color: red500}}>{errorMessage}</div>
            }
            <TextField
              hintText="Username"
              fullWidth={true}
              onChange={this.handleUsernameChange} />
            <TextField
              hintText="Password"
              fullWidth={true}
              onChange={this.handlePasswordChange} />
            <RaisedButton
              primary={true}
              type="submit"
              label="Login"
              disabled={isAuthenticating}
              style={{ width: '100%' }} />
          </Paper>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating,
  errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = dispatch => ({
  loginRequest: (username, password) => dispatch(loginRequest(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
