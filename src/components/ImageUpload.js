/* @flow */

import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload'

const styles = {
  root: {
    padding: '16px 12px',
    color: 'rgba(0, 0, 0, 0.298039)',
    cursor: 'pointer'
  },
  icon: {
    position: 'relative',
    top: 5,
    marginRight: 12,
    fill: 'rgba(0, 0, 0, 0.298039)'
  },
  dropzone: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.298039)',
    borderStyle: 'dashed',
    borderRadius: 4,
    height: 40,
    padding: '16px 12px',
    textAlign: 'center',
  },
  image: {
    maxHeight: 200
  }
}

export default class ImageUpload extends Component {

  state: {
    file: ?File
  }

  static propTypes = {
    onSelect: PropTypes.func
  }

  constructor(props: any) {
    super(props)
    this.state = { file: null }
  }

  handleDrop = (files: Array<File>) => {
    if (files instanceof Array && files.length === 1) {
      const file = files[0]
      this.setState({ file })
      typeof this.props.onSelect === 'function'
        && this.props.onSelect(null, file)
    }
  }

  renderImage = (file: File) => {
    return (
      <div>
        <img src={file.preview} style={styles.image} alt="File to upload" />
      </div>
    )
  }

  render() {
    const isFileSelected = this.state.file !== null

    const dropzoneStyles = isFileSelected
      ? Object.assign({}, styles.dropzone, { height: 'auto', maxHeight: 200 })
      : styles.root

    return (
      <div style={styles.root}>
        <Dropzone
          style={dropzoneStyles}
          accept="image/*"
          onDrop={this.handleDrop}>
          { isFileSelected
              ? this.renderImage(this.state.file)
              : <div>
                  <CloudUpload style={styles.icon} />
                  Drag and drop an image here or click
                </div>
          }
        </Dropzone>
      </div>
    )
  }

}
