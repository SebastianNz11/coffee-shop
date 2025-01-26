import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App clasName="bg-black" />
  </StrictMode>,
)
