import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import App from './App.jsx'
import './index.css'
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')).render(
  <Theme>
    <StrictMode>
      <App />
    </StrictMode>
  </Theme>,
)
