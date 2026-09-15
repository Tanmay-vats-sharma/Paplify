import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './styles/auth.css'
import './styles/appShell.css'

import App from './App.jsx'
import ToastProvider from './components/ui/ToastProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>,
)