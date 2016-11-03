import React from 'react'

const styles = {
  root: {
    fontSize: 12,
    color: 'rgb(244, 67, 54)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  }
}

const Error = ({ message }) =>
  <div style={styles.root}>
    {message}
  </div>

export default Error
