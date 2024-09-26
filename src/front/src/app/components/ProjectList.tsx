"use client"

import { useEffect, useState } from "react";
import { ProjectInterface, TechnologiInterface } from "../interfaces"
import { ProjectCard } from "./ProjectCard"
import { getAllProjects } from "../api"
import styles from './ProjectsList.module.css';

interface ProjectListProps {
    projects: Array<ProjectInterface>,
    technologies: Array<TechnologiInterface>
}


export default function ProjectList({ projects, technologies }: ProjectListProps) {
    const [selectedTechnologies, setSelectedTechnologies] = useState<Array<number>>([]);
    const [filteredProjects, setFilteredProjects] = useState<Array<ProjectInterface>>(projects);

    // Function to handle clicking on a technology pill (toggle selection)
    const handleTechnologyClick = (techId: number) => {
        if (selectedTechnologies.includes(techId)) {
            // If already selected, deselect it
            setSelectedTechnologies(selectedTechnologies.filter((id) => id !== techId));
        } else {
            // Otherwise, add it to the selected list
            setSelectedTechnologies([...selectedTechnologies, techId]);
        }
    };

    // Fetch filtered projects based on selected technologies
    useEffect(() => {
        if (selectedTechnologies.length > 0) {
            // Simulate an API request
            const fetchFilteredProjects = async () => {
                // Assume you're making a real API request here to get projects by technologies
                const response = await getAllProjects({ client: true, technologies: selectedTechnologies });
                setFilteredProjects(response.results);
            };

            fetchFilteredProjects();
        } else {
            // If no technologies are selected, show all projects
            setFilteredProjects(projects);
        }
    }, [selectedTechnologies, projects]);

    return (
        <div>
            <div className={styles.technologyPills}>
                {technologies.map((tech) => (
                    <span
                        key={tech.id}
                        onClick={() => handleTechnologyClick(tech.id)}
                        className={`${styles.techPill} ${selectedTechnologies.includes(tech.id) ? styles.selected : ''
                            }`}
                    >
                        {tech.name}
                    </span>
                ))}
            </div>
            <div className={styles.projectsGrid}>
                {filteredProjects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}