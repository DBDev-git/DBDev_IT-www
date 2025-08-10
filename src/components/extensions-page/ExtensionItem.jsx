import styles from './extensionItem.module.css'

const ExtensionItem = ({extension}) => {
    return (
        <button onClick={() => window.location.href = extension.url} target="_blank" className={styles.item}>
            <div className={styles.image}>
                <img
                    src={extension.image}
                    alt="Extension image"
                    draggable={false}
                />
            </div>
            <div className={styles.info}>
                <h3>{extension.name}</h3>
                <p>{extension.description}</p>
            </div>
        </button>
    );
};

export default ExtensionItem;