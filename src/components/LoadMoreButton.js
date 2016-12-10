// @flow

import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import ProgressBar from 'react-toolbox/lib/progress_bar'

import { container, button, progressBar } from './LoadMoreButton.scss'

const LoadMoreButton = ({ loading, label, onClick }) => (
  <div className={container}>
    { loading
        ? <ProgressBar className={progressBar} type="circular" mode="indeterminate" />
        : <Button raised primary className={button} onClick={onClick}>{label}</Button>
    }
  </div>
)

LoadMoreButton.defaultProps = {
  label: 'Load more'
}

export default LoadMoreButton
