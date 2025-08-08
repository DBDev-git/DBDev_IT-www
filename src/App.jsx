import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img
          src={reactLogo}
          className="logo"
          alt="DBDev"
          draggable={false}
        />
      </div>
      <h1>⌂ DBDev_IT | Main page</h1>
      <h2>Welcome!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="info">
        Made by Damir, using React and Vite
      </p>
    </>
  )
}

export default App
