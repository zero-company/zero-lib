import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './app.css'
import { generateZeroId, parseZeroId } from '../zero-id/zero-id'

const App = () => {
  const [zeroId, setZeroId] = useState<string | null>(null)
  const { isZeroIdValid } = parseZeroId({ zeroId })

  return (
    <div className='prose prose-invert p-2'>
      <h1>zero-lib</h1>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
