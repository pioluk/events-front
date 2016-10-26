/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'
import * as actionCreators from '../actions/events'
import EventForm from '../components/EventForm'

const styles = {
  root: {
    maxWidth: 500,
    margin: '50px auto'
  }
}

class EventAddView extends Component {

  state: {
    formData: {
      title: string,
      description: string,
      dateStart: string,
      timeStart: string,
      dateEnd: string,
      timeEnd: string,
      color: string,
      image: ?any
    }
  }

  constructor(props: any) {
    super(props)
    this.state = {
      formData: {
        title: '',
        description: '',
        dateStart: '',
        timeStart: '',
        dateEnd: '',
        timeEnd: '',
        color: '',
        image: null
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.actions.addEvent(this.state.formData)
  }

  handleChange = R.curry((name: string, value: any) => {
    const newState = R.assocPath(['formData', name], value, this.state)
    this.setState(newState)
  })

  render() {
    return (
      <div style={styles.root}>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <EventForm
          formData={this.state.formData}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    )
  }

}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EventAddView)
