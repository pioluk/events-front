// @flow

import R from 'ramda'
import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'
import ColorPicker from '../components/ColorPicker'
import ImageUpload from '../components/ImageUpload'

const getValue = R.path(['target', 'value'])

const getSecondArg = (_, arg) => arg

const styles = {
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

const EventForm = ({ formData, onChange, onSubmit, errors = {} }) =>
  <form onSubmit={onSubmit}>
    <Paper style={styles.paper}>
      <TextField
        floatingLabelText="Title"
        fullWidth={true}
        value={formData.title}
        onChange={R.compose(onChange('title'), getValue)} />

      <TextField
        floatingLabelText="Description"
        fullWidth={true}
        multiLine={true}
        rows={3}
        value={formData.description}
        onChange={R.compose(onChange('description'), getValue)} />

      <div style={styles.dateTimePicker}>
        <DatePicker
          style={styles.datePicker}
          hintText="Date Start"
          mode="landscape"
          value={formData.dateStart || null}
          onChange={R.compose(onChange('dateStart'), getSecondArg)} />

        <TimePicker
          style={styles.timePicker}
          hintText="Time"
          format="24hr"
          value={formData.timeStart || null}
          onChange={R.compose(onChange('timeStart'), getSecondArg)} />
      </div>

      <div style={styles.dateTimePicker}>
        <DatePicker
          style={styles.datePicker}
          hintText="Date End"
          mode="landscape"
          value={formData.dateEnd || null}
          onChange={R.compose(onChange('dateEnd'), getSecondArg)} />

        <TimePicker
          style={styles.timePicker}
          hintText="Time"
          format="24hr"
          value={formData.timeEnd || null}
          onChange={R.compose(onChange('timeEnd'), getSecondArg)} />
      </div>

      <ColorPicker
        label="Color"
        color={formData.color}
        onChangeComplete={R.compose(onChange('color'), getSecondArg)} />

      <ImageUpload
        onSelect={R.compose(onChange('image'), getSecondArg)} />

      <RaisedButton
        type="submit"
        primary={true}
        label="Create" />
    </Paper>
  </form>

export default EventForm
