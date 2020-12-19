import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Marketing, Header } from './components'

export default () => (
  <BrowserRouter>
    <>
      <Header />
      <Marketing />
    </>
  </BrowserRouter>
)
