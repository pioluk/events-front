import React from 'react'

const styles = {
  root: {
    borderTop: 'none rgb(244, 67, 54)',
    borderRight: 'none rgb(244, 67, 54)',
    borderBottom: '2px solid rgb(244, 67, 54)',
    borderLeft: 'none rgb(244, 67, 54)',
    borderImage: 'initial',
    boxSizing: 'content-box',
    margin: 0,
    position: 'relative',
    transform: 'scaleX(1)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    top: -9
  }
}

const ErrorBar = () =>
  <hr style={styles.root} />

export default ErrorBar
