import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Comments = ({ comments, isLoading, commentCount, onAdd, onLoadMore }) => (
  <div>
    <CommentForm onAdd={onAdd} />
    <CommentList
      comments={comments}
      commentCount={commentCount}
      onLoadMore={onLoadMore} />
  </div>
)

export default Comments
