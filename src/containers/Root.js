/* @flow */

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from '../routes'

export default class Root extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { history, store } = this.props

    return (
      <Provider store={store}>
        <MuiThemeProvider>
          {routes(history)}
        </MuiThemeProvider>
      </Provider>
    )
  }

}
