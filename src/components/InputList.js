import React, { Component, PropTypes } from 'react'
import { assoc, dissoc, mapObjIndexed, values } from 'ramda'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'

const styles = {
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
}

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

  handleFieldChange = id => e => {
    const items = assoc(id, e.target.value)
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
        <TextField value={value} onChange={this.handleFieldChange(key)} />

        <IconButton tooltip="Remove" onClick={this.handleFieldRemove(key)}>
          <ContentRemove />
        </IconButton>
      </li>
    )
  }

  render() {
    const { items } = this.state
    const itemsArray = values(mapObjIndexed(this.renderItem, items))

    return (
      <div>
        <ul style={styles.ul}>
          {itemsArray}
        </ul>
        <FlatButton
          label="Add"
          icon={<ContentAdd />}
          onClick={this.handleFieldAdd} />
      </div>
    )
  }

}

export default InputList
