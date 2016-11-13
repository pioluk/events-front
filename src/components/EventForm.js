// @flow

import R from 'ramda'
import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import { Button } from 'react-toolbox/lib/button'
import Card from 'react-toolbox/lib/card'
import Input from 'react-toolbox/lib/input'
import ColorPicker from '../components/ColorPicker'
import ImageUpload from '../components/ImageUpload'
import Error from '../components/Error'
import ErrorBar from '../components/ErrorBar'
import InputList from '../components/InputList'
import LocationChooser from '../components/LocationChooser'

const getSecondArg = (_, arg) => arg

import { card, datePicker, timePicker, dateTimePicker } from './EventForm.scss'

const EventForm = ({ formData, onChange, onSubmit, errors = {} }) =>
  <form onSubmit={onSubmit}>
    <Card className={card}>
      <Input
        label="Title"
        value={formData.title}
        error={errors.title}
        onChange={onChange('title')} />

      <Input
        label="Description"
        value={formData.description}
        error={errors.description}
        onChange={onChange('description')} />

      <div className={dateTimePicker}>
        <DatePicker
          className={datePicker}
          hintText="Date Start"
          mode="landscape"
          value={formData.dateStart || null}
          onChange={R.compose(onChange('dateStart'), getSecondArg)} />

        <TimePicker
          className={timePicker}
          hintText="Time"
          format="24hr"
          value={formData.timeStart || null}
          onChange={R.compose(onChange('timeStart'), getSecondArg)} />
      </div>
      { (!!errors.dateStart || !!errors.timeStart)
        && <div>
          <ErrorBar />
          <Error message={'Start date is required.'} />
        </div>
      }

      <div className={dateTimePicker}>
        <DatePicker
          className={datePicker}
          hintText="Date End"
          mode="landscape"
          value={formData.dateEnd || null}
          onChange={R.compose(onChange('dateEnd'), getSecondArg)} />

        <TimePicker
          className={timePicker}
          hintText="Time"
          format="24hr"
          value={formData.timeEnd || null}
          onChange={R.compose(onChange('timeEnd'), getSecondArg)} />
      </div>
      { (!!errors.dateEnd || !!errors.timeEnd)
        && <div>
          <ErrorBar />
          <Error message={'End date is required.'} />
        </div>
      }

      <ColorPicker
        label="Color"
        color={formData.color}
        onChangeComplete={R.compose(onChange('color'), getSecondArg)} />

      <ImageUpload
        onSelect={R.compose(onChange('image'), getSecondArg)} />

      <LocationChooser />

      <div>
        <h4>Emails</h4>
        <InputList
          items={formData.emails}
          onChange={onChange('emails')} />
      </div>

      <div>
        <h4>Phones</h4>
        <InputList
          items={formData.phones}
          onChange={onChange('phones')} />
      </div>

      <div>
        <h4>Websites</h4>
        <InputList
          items={formData.websites}
          onChange={onChange('websites')} />
      </div>

      <Button
        primary
        raised
        type="submit"
        label="Create" />

    </Card>
  </form>

export default EventForm
