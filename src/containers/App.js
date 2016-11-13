/* @flow */

import React, { Component } from 'react'
import Header from './Header'
import Notifications from './Notifications'

class App extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        <div>{children}</div>
        <Notifications />
      </div>
    )
  }

}

export default App
