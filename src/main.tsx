import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/source-sans-3/latin-400.css'
import '@fontsource/source-sans-3/latin-400-italic.css'
import '@fontsource/source-sans-3/latin-700.css'
import '@fontsource/source-sans-3/latin-700-italic.css'
import '@fontsource/roboto-mono/latin-400.css'
import '@fontsource/roboto-mono/latin-400-italic.css'
import '@fontsource/roboto-mono/latin-700.css'
import '@fontsource/roboto-mono/latin-700-italic.css'
import './app/globals.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
