import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "tachyons"
import Terminator from './components/Terminator'
import models from './components/models'
import App from './App '

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
