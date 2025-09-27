import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import the Leaflet icon override before any map components mount so
// markers will use our public images instead of node_modules paths.
import './leafletIcon'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
