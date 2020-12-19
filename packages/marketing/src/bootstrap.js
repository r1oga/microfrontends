import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory } from 'history'

import App from './App'
const ROOT_ID = '#_marketing-dev-Root'

// Mount function to start up app
const mount = (el, { onNavigate } = {}) => {
  const history = createMemoryHistory()

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history
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
inDevMode() && inIsolation() && mount(rootEl)

// If in container export mount

export { mount }
