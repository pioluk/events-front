import React from 'react'
import { IconButton } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'

const CommentForm = ({ onSubmit }) => (
  <form onSubmit={ e => { e.preventDefault(); onSubmit(e) } }>
    <div>
      <Input
        multiline
        className
        hint="Comment" />
      <IconButton
        type="submit"
        icon="send" />
    </div>
  </form>
)

export default CommentForm
