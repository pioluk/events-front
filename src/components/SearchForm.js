// @flow

import React, {Component} from 'react'
import Input from 'react-toolbox/lib/input'
import styled from 'styled-components'

const InputWrapper = styled.div `
  width: 100%;
  background-color: #fff;
  padding-left: 6px;
  padding-right: 6px;
`

export default class SearchForm extends Component {

  state = {
    searchTerm: ''
  }

  onSubmit = (e: any) => {
    e.preventDefault()
    const searchTerm = this.state.searchTerm.trim()
    if (!!searchTerm) {
      this.props.onSearch(searchTerm)
    }
  }

  onTermChange = (searchTerm : string) => {
    this.setState({ searchTerm })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <InputWrapper>
            <Input
              hint="Search for events"
              value={this.state.searchTerm}
              onChange={this.onTermChange} />
          </InputWrapper>
        </form>
      </div>
    )
  }

}
