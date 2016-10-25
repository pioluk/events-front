// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'

class Notifications extends Component {

  state: {
    opened: boolean
  }

  constructor(props) {
    super(props)
    this.state = { opened: false }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.id !== nextProps.id) {
      this.setState({ opened: true })
    }
  }

  handleRequestClose = () => {
    this.setState({ opened: false })
  }

  render() {
    return (
      <Snackbar
        open={this.state.opened}
        message={this.props.message}
        autoHideDuration={3000}
        onRequestClose={this.handleRequestClose} />
    )
  }

}

const mapStateToProps = ({ notifications }) => ({
  id: notifications.id,
  message: notifications.message
})

export default connect(mapStateToProps)(Notifications)
