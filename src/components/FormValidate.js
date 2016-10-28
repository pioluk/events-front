// @flow

import R from 'ramda'
import React, { Component } from 'react'

const createValidatedForm = (initialState, validations) => BaseComponent =>
  class extends Component {

    static displayName = `ValidatedForm(${BaseComponent.displayName})`

    constructor(props) {
      super(props)
      this.state = R.assoc('errors', {}, initialState)
    }

    onChange = R.curry((name: string, value: any) => {
      this.setState(state => R.assocPath(['formData', name], value, state))
    })

    onSubmit = e => {
      this.props.onSubmit(e, this.state.formData)
    }

    render() {
      const state = this.state
      const props = {
        ...this.props,
        formData: state.formData,
        errors: state.errors,
        onChange: this.onChange,
        // onSubmit: this.onSubmit
      }

      return (
        <div>
          <pre>{JSON.stringify(props.formData, null, 2)}</pre>
          <BaseComponent { ...props } />
        </div>
      )
    }

  }

export default createValidatedForm
