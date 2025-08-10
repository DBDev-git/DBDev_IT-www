import { useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={styles.card}>
                <button onClick={() => setCount((count) => count + 1)} >
                    count is {count}
                </button>
            </div>
            <div className={styles.info}>
                <a className={styles.info} href='/'>
                    main
                </a>
                <> | </>
                <a className={styles.info} href='/projects.html'>
                    projects
                </a>
                <> | </>
                <a className={styles.info} href='/extensions.html'>
                    extensions
                </a>
                
            </div>
            <p className={styles.info}>Made by Damir, using React and Vite</p>
        </>
    )
}

export default Footer