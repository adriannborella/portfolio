import styles from './ProjectDetail.module.css';
import { getProject } from "../../api"

export default async function ProjectDetails({ params }: { params: { id: number } }) {

    const project = await getProject(params.id)

    return <div className={styles.projectDetail}>
        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.description}>{project.description}</p>

        <h3>Technologies:</h3>
        <div className={styles.technologies}>
            {project.technologies_names.map((tech) => (
                <span key={tech.id} className={styles.techPill}>
                    {tech.name}
                </span>
            ))}
        </div>

        {/* Optionally add other project details like URL or creation date */}
        {project.url && (
            <div className={styles.projectLink}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Project
                </a>
            </div>
        )}
    </div>
}
