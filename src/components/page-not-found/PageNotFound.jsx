import reactLogo from '../../assets/logo.svg'
import styles from './PageNotFound.module.css'

const PageNotFound = (props) => {
  return (
    <>
      <div>
        <img
          src={reactLogo}
          className={styles.logo}
          alt="DBDev"
          draggable={false}
        />
      </div>
      <h1>Page not found!</h1>
      <h2><code>DBDev_IT | {props.page}</code> is not found</h2>
      <div className={styles.card}>
        <button onClick={() => window.location.href = '/'}>
          go to main page
        </button>
      </div>
    </>
  )
}

export default PageNotFound