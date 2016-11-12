// @flow

import React from 'react'
import { Button } from 'react-toolbox/lib/button'

import { fab } from './Fab.scss'

const Fab = ({ icon, label, onClick }) => (
  <Button
    accent
    floating
    icon={icon}
    title={label}
    className={fab}
    onClick={onClick} />
)

export default Fab
