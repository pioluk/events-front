/* @flow */

import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'

import ColorPicker from '../components/ColorPicker'
import ImageUpload from '../components/ImageUpload'

const styles = {
  root: {
    maxWidth: 500,
    margin: '50px auto'
  },
  paper: {
    padding: '3em 2em 2em 3em'
  },
  datePicker: {
    flex: 3,
    maxWidth: '40%',
    overflow: 'hidden',
    marginRight: 24
  },
  timePicker: {
    flex: 2,
    maxWidth: '20%',
    overflow: 'hidden'
  },
  dateTimePicker: {
    'display': 'flex',
  }
}

class EventAddView extends Component {

  state: {
    title: string,
    description: string,
    dateStart: string,
    timeStart: string,
    dateEnd: string,
    timeEnd: string,
    color: string,
    image: ?any
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      dateStart: '',
      timeStart: '',
      dateEnd: '',
      timeEnd: '',
      color: '',
      image: null
    }
  }

  handleTitleChange = e => {
    const title = e.target.value
    this.setState({
      ...this.state,
      title
    })
  }

  handleDescriptionChaneg = e => {
    const description = e.target.value
    this.setState({
      ...this.state,
      description
    })
  }

  handleDateStartChange = (e, date) => {
    this.setState({
      dateStart: date
    })
  }

  handleTimeStartChange = (e, time) => {
    this.setState({
      ...this.state,
      timeStart: time
    })
  }

  handleDateEndChange = (e, date) => {
    this.setState({
      dateEnd: date
    })
  }

  handleTimeEndChange = (e, time) => {
    this.setState({
      ...this.state,
      timeEnd: time
    })
  }

  handleColorChangeComplete = (e, color) => {
    this.setState({
      ...this.state,
      color
    })
  }

  handleImageSelect = (e, image) => {
    this.setState({ image })
    setTimeout(() => {
      console.log(image)
    }, 1200)
  }

  render() {
    return (
      <div style={styles.root}>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
          <Paper style={styles.paper}>
            <TextField
              floatingLabelText="Title"
              fullWidth={true}
              onChange={this.handleTitleChange} />

            <TextField
              floatingLabelText="Description"
              fullWidth={true}
              multiLine={true}
              rows={3}
              onChange={this.handleDescriptionText} />

            <div style={styles.dateTimePicker}>
              <DatePicker
                style={styles.datePicker}
                hintText="Date Start"
                mode="landscape"
                onChange={this.handleDateStartChange} />

              <TimePicker
                style={styles.timePicker}
                hintText="Time"
                format="24hr"
                onChange={this.handleTimeStartChange} />
            </div>

            <div style={styles.dateTimePicker}>
              <DatePicker
                style={styles.datePicker}
                hintText="Date End"
                mode="landscape"
                onChange={this.handleDateEndChange} />

              <TimePicker
                style={styles.timePicker}
                hintText="Time"
                format="24hr"
                onChange={this.handleTimeEndChange} />
            </div>

            <ColorPicker
              label="Color"
              onChangeComplete={this.handleColorChangeComplete} />

            <ImageUpload onSelect={this.handleImageSelect} />

            <RaisedButton
              type="submit"
              primary={true}
              label="Create" />
          </Paper>
        </form>
      </div>
    )
  }

}

export default EventAddView
