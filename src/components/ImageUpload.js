/* @flow */

import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload'
import { wrapper, icon, image } from './ImageUpload.scss'

const styles = {
  dropzone: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.298039)',
    borderStyle: 'dashed',
    borderRadius: 4,
    padding: '16px 12px',
    textAlign: 'center',
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
        <img src={file.preview} className={image} alt="File to upload" />
      </div>
    )
  }

  render() {
    const isFileSelected = this.state.file !== null

    const dropzoneStyles = isFileSelected
      ? Object.assign({}, styles.dropzone, { height: 'auto' })
      : styles.dropzone

    return (
      <div className={wrapper}>
        <Dropzone
          style={dropzoneStyles}
          accept="image/*"
          onDrop={this.handleDrop}>
          { isFileSelected
              ? this.renderImage(this.state.file)
              : <div>
                  <CloudUpload className={icon} />
                  Drag and drop an image here or click
                </div>
          }
        </Dropzone>
      </div>
    )
  }

}
