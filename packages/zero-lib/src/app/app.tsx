import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './app.css'
import { generateZeroId } from '../zero-id/zero-id'

const App = () => {
  const [count, setCount] = useState(0)
  const [zeroId, setZeroId] = useState('none')

  return (
    <div className='prose prose-invert'>
      <h1 className='text-red-500'>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setZeroId(generateZeroId({ prefix: 'zero1' }))}>
          zeroId is {zeroId}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
