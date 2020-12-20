import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles'

import Header from './components/Header'
import Progress from './components/Progress'
import Dashboard from './components/Dashboard'

const [MarketingLazy, AuthLazy, DashboardLazy] = [
  'Marketing',
  'Auth',
  'Dashboard'
].map(app => lazy(() => import(`./components/${app}`)))

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => {
  const [signedIn, setSignedIn] = useState(false)
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                {/*
                  Callback passed first to AuthLazy component in container
                  AuthLazy passes it further to Auth sub app
                */}
                <AuthLazy onSignIn={() => setSignedIn(true)} />
              </Route>
              <Route path='/dashboard' component={DashboardLazy} />
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </BrowserRouter>
  )
}
