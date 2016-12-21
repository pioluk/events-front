// @flow

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 200px;
  margin: 50px auto;
`

const Icon = styled.i`
  color: #757575;
  font-size: 2em;
`

const Text = styled.h4`
  color: #757575;
`

const NoEvents = () => (
  <Wrapper>
    <Icon className="material-icons">search</Icon>
    <Text>No Events</Text>
  </Wrapper>
)

export default NoEvents
