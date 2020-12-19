import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

import { Landing, Pricing } from './components'

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' })

export default () => (
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
)
