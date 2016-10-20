/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { loginRequest } from '../actions/auth'

const loginViewStyle = {
  maxWidth: 375,
  margin: '50px auto'
}

const LoginView = ({ isAuthenticating, loginRequest }) => (
  <div style={loginViewStyle}>
    <Paper style={{ padding: '3em 2em 2em 3em' }}>
      <TextField hintText="Username" fullWidth={true} />
      <TextField hintText="Password" fullWidth={true} />
      <RaisedButton
        primary={true}
        disabled={isAuthenticating}
        label="Login"
        style={{ width: '100%' }}
        onClick={() => { loginRequest('', '') }} />
    </Paper>
  </div>
)

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating
})

const mapDispatchToProps = dispatch => ({
  loginRequest: (username, password) => dispatch(loginRequest(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
