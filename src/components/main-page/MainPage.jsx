import logo from '../../assets/logo.svg'
import styles from './MainPage.module.css'
import ProjectsButton from './Navigation'

const MainPage = (props) => {
  return (
    <>
      <div>
        <img
          src={logo}
          className={styles.logo}
          alt="DBDev"
          draggable={false}
        />
      </div>
      <h1>Welcome!</h1>
      <h2>This is <code>DBDev_IT | {props.page}</code> page</h2>
      <ProjectsButton />
    </>
  )
}

export default MainPage