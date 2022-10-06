import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { GlobalContextProvider } from './common'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
)
