/* @flow */

import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import { ChromePicker } from 'react-color'

const styles = {
  root: {
    height: 40
  },
  label: {
    position: 'relative',
    top: '-25%',
    color: 'rgba(0, 0, 0, 0.298039)',
    marginRight: 12
  },
  buttonLabel: {
    display: 'none'
  }
}

class ColorPicker extends Component {

  state: {
    color: string,
    opened: boolean,
    anchorEl: ?any
  }

  static propTypes = {
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func
  }

  constructor(props: any) {
    super(props)
    this.state = {
      color: this.props.color || '#fff',
      opened: false,
      anchorEl: null
    }
  }

  handleTouchTap = (e: Event) => {
    this.setState({
      opened: true,
      anchorEl: e.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      opened: false,
      anchorEl: null
    })
  }

  handleChange = (color: any) => {
    this.setState({
      ...this.state,
      color: color.hex
    })

    typeof this.props.onChange === 'function'
      && this.props.onChange(null, color.hex)
  }

  handleChangeComplete = (color: any) => {
    typeof this.props.onChangeComplete === 'function'
      && this.props.onChangeComplete(null, color.hex)
  }

  render() {
    const { color } = this.state
    const { label } = this.props

    const buttonStyle = { backgroundColor: color }

    return (
      <div style={styles.root}>
        <span style={styles.label}>{label}</span>
        <RaisedButton
          style={buttonStyle}
          overlayStyle={buttonStyle}
          labelStyle={styles.buttonLabel}
          label={' '}
          onTouchTap={this.handleTouchTap} />
        <Popover
          open={this.state.opened}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}>
          <ChromePicker
            color={color}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete} />
        </Popover>
      </div>
    )
  }

}

export default ColorPicker
