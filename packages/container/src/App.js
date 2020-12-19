import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles'

import { Marketing, Header } from './components'

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <>
        <Header />
        <Marketing />
      </>
    </BrowserRouter>
  </StylesProvider>
)
