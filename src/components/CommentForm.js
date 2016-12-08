import React from 'react'
import { IconButton } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'

import { wrapper, input } from './CommentForm.scss'

const CommentForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className={wrapper}>
      <Input
        className={input}
        multiline
        rows={3}
        hint="Comment" />
      <IconButton
        type="submit"
        icon="send" />
    </div>
  </form>
)

export default CommentForm
