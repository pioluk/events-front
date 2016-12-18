// @flow

import R from 'ramda'
import React, { Component } from 'react'
import { getErrors } from '../validation'

const createValidatedForm = (initialState: any, validations: Array<any>) => BaseComponent =>
  class extends Component {

    state: {
      formData: any,
      errors: ?any
    }

    static displayName = `ValidatedForm(${BaseComponent.displayName})`

    constructor(props: any) {
      super(props)
      this.state = R.assoc('errors', {}, initialState)
    }

    onChange = R.curry((name: string, value: any) => {
      this.setState(state => R.assocPath(['formData', name], value, state))
    })

    onSubmit = (e: Event) => {
      // e.preventDefault()
      const errors = getErrors(R.prop('formData', this.state), validations)
      this.setState(state => R.assoc('errors', errors, state))
      console.log(errors)

      this.props.onSubmit(e, this.state.formData)
    }

    render() {
      const state = this.state
      const props = {
        ...this.props,
        formData: state.formData,
        errors: state.errors,
        onChange: this.onChange,
        onSubmit: this.onSubmit
      }

      return (
        <div>
          <BaseComponent { ...props } />
        </div>
      )
    }

  }

export default createValidatedForm
