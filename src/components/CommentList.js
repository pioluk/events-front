// @flow

import React from 'react'
import Comment from './Comment'

import { commentList } from './CommentList.scss'

const CommentList = ({ comments }) => (
  <ul className={commentList}>
    { comments.map((comment, i) =>
        <li key={i}><Comment comment={comment} /></li>
      )
    }
  </ul>
)

CommentList.defaultProps = {
  comments: []
}

export default CommentList
