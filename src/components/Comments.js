import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Comments = ({ comments, onSubmit }) => (
  <div>
    <CommentForm onSubmit={onSubmit} />
    <CommentList comments={comments} />
  </div>
)

export default Comments
