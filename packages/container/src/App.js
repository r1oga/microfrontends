import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles'

import { Marketing, Header, Auth } from './components'

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/' component={Marketing} />
        </Switch>
      </>
    </BrowserRouter>
  </StylesProvider>
)
