import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.tsx'
import { ClientProvider } from './contexts/ClientContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <App />
      </ClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
