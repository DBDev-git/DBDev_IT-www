import styles from './ProjectItem.module.css'

const ProjectItem = ({project}) => {
    return (
        <button onClick={() => window.location.href = project.url} target="_blank" className={styles.item}>
            <div className={styles.image}>
                <img
                    src={project.image}
                    alt="Project image"
                    draggable={false}
                />
            </div>
            <div className={styles.info}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </button>
    );
};

export default ProjectItem;