import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
const ROOT_ID = '#_marketing-dev-Root'

// Mount function to start up app
const mount = selector => {
  ReactDOM.render(<App />, document.querySelector(selector))
}

const inDevMode = () => process.env.NODE_ENV === 'development'
const inIsolation = selector => !!document.querySelector(selector)

// If dev mode & isolation, call mount
inDevMode() && inIsolation(ROOT_ID) && mount(ROOT_ID)

// If in container export mount

export { mount }
