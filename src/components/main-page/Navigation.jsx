import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.cards}>
            <button onClick={() => window.location.href = '/projects.html'}>
                projects
            </button>
            <button onClick={() => window.location.href = '/extensions.html'}>
                extensions
            </button>
        </div>
    )
}

export default Navigation