import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
const ROOT_ID = '#_marketing-dev-Root'

// Mount function to start up app
const mount = el => {
  ReactDOM.render(<App />, el)
}

const inDevMode = () => process.env.NODE_ENV === 'development'
const inIsolation = () => !!document.querySelector(ROOT_ID)

// If dev mode & isolation, call mount
const rootEl = document.querySelector(ROOT_ID)
inDevMode() && inIsolation() && mount(rootEl)

// If in container export mount

export { mount }
