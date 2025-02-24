import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Axolotl from './Axolotl.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Axolotl />
  </StrictMode>,
)
