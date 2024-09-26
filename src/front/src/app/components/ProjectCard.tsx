import { ProjectInterface } from "../interfaces"
import styles from './ProjectCard.module.css';
import Link from 'next/link';

interface ProjectCard {
    project: ProjectInterface
}

export function ProjectCard({ project }: ProjectCard) {
    // Function to truncate the description if it's longer than 250 characters
    const truncateDescription = (description: string, maxLength: number) => {
        return description.length > maxLength
            ? description.slice(0, maxLength) + '...'
            : description;
    };

    return (
        <Link href={`/projects/${project.id}`}>
            <div className={styles.card}>
                <h2 className={styles.title}>
                    {project.name.toUpperCase()}
                </h2>
                <p className={styles.description}>
                    {truncateDescription(project.description, 250)}
                </p>
                <div className={styles.technologies}>
                    {project.technologies_names.map((tech) => (
                        <span key={tech.id} className={styles.techPill}>
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
