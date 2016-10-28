/* @flow */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'
import * as actionCreators from '../actions/events'
import createValidatedForm from '../components/FormValidate'
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

  handleSubmit = (e, formData) => {
    e.preventDefault()
    this.props.actions.addEvent(formData)
  }

  render() {
    const FormValidate = createValidatedForm(this.state, {})(EventForm)

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
