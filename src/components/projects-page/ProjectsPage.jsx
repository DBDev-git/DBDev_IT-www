import ProjectItem from './ProjectItem'
import projects from './projects.data'

const ProjectsPage = () => (
    <>
        <br />
        <br />
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