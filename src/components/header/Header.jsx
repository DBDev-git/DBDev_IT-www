import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

const Header = (props) => (
  <>
    <header className={styles.header}>
      <img
        src={logo}
        alt="DBDev"
        className={styles.logo}
        draggable={false}
      />
      <span className={styles.title}>DBDev_IT | {props.page}</span>
    </header>
    <br />
    <br />
    <br />
  </>
)

export default Header