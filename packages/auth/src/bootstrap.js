import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'
const ROOT_ID = '#_auth-dev-Root'

// Mount function to start up app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history
      console.log(nextPathname)
      // avoid infinite loop
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

const inDevMode = () => process.env.NODE_ENV === 'development'
const inIsolation = () => !!document.querySelector(ROOT_ID)

// If dev mode & isolation, call mount
const rootEl = document.querySelector(ROOT_ID)
inDevMode() &&
  inIsolation() &&
  mount(rootEl, { defaultHistory: createBrowserHistory() })

// If in container export mount

export { mount }
