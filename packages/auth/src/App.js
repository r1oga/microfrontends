import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

import { SignIn, SignUp } from './components'

const generateClassName = createGenerateClassName({ productionPrefix: 'au' })

export default ({ history }) => (
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin' component={SignIn} />
          <Route path='/auth/signup' component={SignUp} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
)
