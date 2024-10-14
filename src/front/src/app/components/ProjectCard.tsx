import { ProjectInterface } from "../interfaces"
import Link from 'next/link';

interface ProjectCard {
    project: ProjectInterface
}

export function ProjectCard({ project }: ProjectCard) {

    return (
        <Link href={`/projects/${project.id}`}>
            <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                    {/* Project Name */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">{project.name}</h2>

                    {/* Project Description (truncate to 250 characters) */}
                    <p className="text-gray-600 mb-5">
                        {project.description.length > 250
                            ? `${project.description.slice(0, 250)}...`
                            : project.description}
                    </p>

                    {/* Technologies (displayed as pills) */}
                    <div className="flex flex-wrap gap-2 mb-4">

                        {project.technologies_names.map((tech) => (
                            <span key={tech.id} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* Project Link (if available) */}
                    {project.url && (
                        <a
                            href={project.url}
                            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Project
                        </a>
                    )}
                </div>
            </div>
        </Link>
    )

    // return (
    //     <Link href={`/projects/${project.id}`}>
    //         <div className={styles.card}>
    //             <h2 className={styles.title}>
    //                 {project.name.toUpperCase()}
    //             </h2>
    //             <p className={styles.description}>
    //                 {truncateDescription(project.description, 250)}
    //             </p>
    //             <div className={styles.technologies}>
    //                 {project.technologies_names.map((tech) => (
    //                     <span key={tech.id} className={styles.techPill}>
    //                         {tech.name}
    //                     </span>
    //                 ))}
    //             </div>
    //         </div>
    //     </Link>
    // );
}
