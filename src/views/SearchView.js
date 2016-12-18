// @flow

import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'
import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding-left: 6px;
  padding-right: 6px;
`

class SearchView extends Component {

  state = {
    searchTerm: ''
  }

  onTermChange = (searchTerm: string) => {
    this.setState({ searchTerm })
  }

  render () {
    return (
      <div>
        <InputWrapper>
          <Input onChnage={this.onTermChange} />
        </InputWrapper>
      </div>
    )
  }

}

export default SearchView;
