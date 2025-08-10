import ProjectItem from './ProjectItem'
import projects from '../../assets/data/projects.data'

const ProjectsPage = () => (
    <>
        <h1>Projects</h1>
        {projects.length > 0 ? projects.map(project => (
            <div key={project.id}>
                <ProjectItem project={project} />
                <br />
            </div>
        )) : <p>Failed to load projects :(</p>}
    </>
)

export default ProjectsPage