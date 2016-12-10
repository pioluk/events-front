// @flow

import React, { Component } from 'react'
import { IconButton } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'

import { wrapper, input } from './CommentForm.scss'

export default class CommentForm extends Component {

  state: {
    text: string
  }

  state = {
    text: ''
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    const text = this.state.text
    if (text.trim().length > 0) {
      this.props.onAdd(text.trim())
      this.setState({ text: '' })
    }
  }

  handleTextChange = (text: string) => {
    this.setState({ text })
  }

  render () {
    const { text, isLoading } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={wrapper}>
          <Input
            className={input}
            multiline
            rows={3}
            hint="Comment"
            value={text}
            onChange={this.handleTextChange} />
          <IconButton
            type="submit"
            icon="send"
            disabled={isLoading} />
        </div>
      </form>
    )
  }

}
