import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./UseRef.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
