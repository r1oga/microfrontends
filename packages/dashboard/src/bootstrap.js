import { createApp } from 'vue'

import Dashboard from './components/Dashboard.vue'

const ROOT_ID = '#_dashboard-dev-Root'

// Mount function to start up app
const mount = el => {
  const app = createApp(Dashboard)
  app.mount(el)
}

const inDevMode = () => process.env.NODE_ENV === 'development'
const inIsolation = () => !!document.querySelector(ROOT_ID)

// If dev mode & isolation, call mount
const rootEl = document.querySelector(ROOT_ID)
inDevMode() && inIsolation() && mount(rootEl)

// If in container export mount

export { mount }
