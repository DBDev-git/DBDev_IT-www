import { useState } from 'react'
import reactLogo from '../../assets/logo.svg'
import './main-page.css'

const MainPageComponent = (props) => {
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
      <h1>Welcome!</h1>
      <h2>This is <code>DBDev_IT | {props.page}</code> page</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default MainPageComponent
