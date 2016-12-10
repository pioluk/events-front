import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Comments = ({ comments, isLoading, onAdd }) => (
  <div>
    <CommentForm onAdd={onAdd} />
    <CommentList comments={comments} />
  </div>
)

export default Comments
