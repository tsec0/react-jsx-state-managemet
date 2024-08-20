import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./UseEffect.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
