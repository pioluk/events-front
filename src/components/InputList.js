import React, { Component, PropTypes } from 'react'
import { assoc, dissoc, mapObjIndexed, values } from 'ramda'
import { Button, IconButton } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'

import { list, listItemInput } from './InputList.scss'

class InputList extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.itemsCount = props.items.length
    const items = props.items.reduce((acc, value, index) => (acc[index + 1] = value, acc), {})
    this.state = {
      items
    }
  }

  emitChange = () => {
    this.props.onChange(values(this.state.items))
  }

  handleFieldChange = id => value => {
    const items = assoc(id, value)
    this.setState(
      state => assoc('items', items(state.items), state),
      this.emitChange
    )
  }

  handleFieldAdd = () => {
    this.setState(
      state => ({ items: assoc(++this.itemsCount, '', state.items) }),
      this.emitChange
    )
  }

  handleFieldRemove = id => () => {
    this.setState(
      state => assoc('items', dissoc(id, state.items), state),
      this.emitChange
    )
  }

  renderItem = (value, key) => {
    return (
      <li key={key}>
        <Input className={listItemInput} value={value} onChange={this.handleFieldChange(key)} />
        <IconButton icon="remove" title="Remove" onClick={this.handleFieldRemove(key)} />
      </li>
    )
  }

  render() {
    const { items } = this.state
    const itemsArray = values(mapObjIndexed(this.renderItem, items))

    return (
      <div>
        <ul className={list}>
          {itemsArray}
        </ul>
        <Button
          label="Add"
          icon="add"
          onClick={this.handleFieldAdd} />
      </div>
    )
  }

}

export default InputList
