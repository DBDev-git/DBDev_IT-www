import { useState } from 'react'
import reactLogo from '../../assets/logo.svg'
import './page-not-found.css'

const PageNotFoundComponent = (props) => {
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
      <h1>Page not found!</h1>
      <h2><code>DBDev_IT | {props.page}</code> page is not found</h2>
      <div className="card">
        <button onClick={() => window.location.href = '/'}
        >
          go to main page
        </button>
      </div>
    </>
  )
}

export default PageNotFoundComponent