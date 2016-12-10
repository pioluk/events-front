// @flow

import React from 'react'
import Comment from './Comment'
import { commentList } from './CommentList.scss'
import LoadMoreButton from './LoadMoreButton'

const CommentList = ({ comments, commentCount, onLoadMore }) => (
  <ul className={commentList}>
    {comments.map((comment, i) =>
      <li key={i}><Comment comment={comment} /></li>
    )}
    { commentCount > comments.length
        && <LoadMoreButton loading={false} onClick={onLoadMore} />
    }
  </ul>
)

CommentList.defaultProps = {
  comments: []
}

export default CommentList
