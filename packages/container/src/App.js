import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import Header from './components/Header'
import Progress from './components/Progress'

const history = createBrowserHistory()
const [MarketingLazy, AuthLazy, DashboardLazy] = [
  'Marketing',
  'Auth',
  'Dashboard'
].map(app => lazy(() => import(`./components/${app}`)))

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => {
  const [signedIn, setSignedIn] = useState(false)
  useEffect(() => {
    // redirect to dashboard
    if (signedIn) history.push('/dashboard')
  }, [signedIn])

  return (
    <Router history={history}>
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
              <Route path='/dashboard'>
                {!signedIn && <Redirect to='/' />}
                <DashboardLazy />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </Router>
  )
}
