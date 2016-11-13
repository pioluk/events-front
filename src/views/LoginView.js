/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from 'react-toolbox/lib/card'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

import { loginRequest } from '../actions/auth'

import { wrapper, error, card } from './LoginView.scss'

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

  handleUsernameChange = (username: string) => {
    this.setState({ ...this.state, username })
  }

  handlePasswordChange = (password: string) => {
    this.setState({ ...this.state, password })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.loginRequest(username, password)
  }

  render() {
    const { isAuthenticating, errorMessage } = this.props

    return (
      <div className={wrapper}>
        <form onSubmit={this.handleSubmit}>
          <Card className={card}>
            { !!errorMessage
              && <div className={error}>{errorMessage}</div>
            }
            <Input
              label="Username"
              onChange={this.handleUsernameChange} />
            <Input
              type="password"
              label="Password"
              onChange={this.handlePasswordChange} />
            <Button
              primary
              raised
              type="submit"
              label="Login"
              disabled={isAuthenticating} />
          </Card>
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
