import React, { lazy, Suspense, useState } from 'react'
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

export default () => {
  const [signedIn, setSignedIn] = useState(false)
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header signedIn={signedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                {/*
                  Callback passed first to AuthLazy component in container
                  AuthLazy passes it further to Auth sub app
                */}
                <AuthLazy onSignIn={() => setSignedIn(true)} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </BrowserRouter>
  )
}
