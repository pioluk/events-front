import React from 'react'

const styles = {
  root: {
    fontSize: 12,
    color: 'rgb(244, 67, 54)'
  }
}

const Error = ({ message }) =>
  <div style={styles.root}>
    {message}
  </div>

export default Error
