// @flow

import React from 'react'
import * as classNames from './Comment.scss'

const Comment = ({ comment }) => (
  <div className={classNames.comment}>
    <div>
      <span className={classNames.username}>{comment.User.username}</span>
      <span className={classNames.date}>{comment.updatedAt}</span>
    </div>
    <div className={classNames.text}>
      {comment.text}
    </div>
  </div>
)

export default Comment
