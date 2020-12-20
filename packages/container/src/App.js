import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles'

import Header from './components/Header'
import Progress from './components/Progress'

const MarketingLazy = lazy(() => import('./components/Marketing'))
const AuthLazy = lazy(() => import('./components/Auth'))

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path='/auth' component={AuthLazy} />
            <Route path='/' component={MarketingLazy} />
          </Switch>
        </Suspense>
      </>
    </StylesProvider>
  </BrowserRouter>
)
