/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'
import * as actionCreators from '../actions/events'
import createValidatedForm from '../components/FormValidate'
import EventForm from '../components/EventForm'
import { isDate, isNonEmptyString } from '../validation'

const styles = {
  root: {
    maxWidth: 500,
    margin: '50px auto'
  }
}

const validations = {
  title: [
    [ isNonEmptyString, 'Title cannot be empty.' ]
  ],
  description: [
    [ isNonEmptyString, 'Description cannot be empty.' ]
  ],
  dateStart: [
    [ isDate, 'Start date cannot be empty.' ]
  ],
  timeStart: [
    [ isDate, 'Time cannot be empty.' ]
  ],
  dateEnd: [
    [ isDate, 'End date cannot be empty.' ]
  ],
  timeEnd: [
    [ isDate, 'Time cannot be empty.' ]
  ],
  color: [
    [ isNonEmptyString, 'Color cannot be empty.' ]
  ],
  image: []
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
        title: 'A',
        description: 'B',
        dateStart: new Date(),
        timeStart: new Date(),
        dateEnd: new Date(),
        timeEnd: new Date(),
        color: '#de12fe',
        image: null
      }
    }
  }

  handleSubmit = (e, formData) => {
    e.preventDefault()
    this.props.actions.addEvent(formData)
  }

  render() {
    const FormValidate = createValidatedForm(this.state, validations)(EventForm)

    return (
      <div style={styles.root}>
        <FormValidate
          formData={this.state.formData}
          onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EventAddView)
