import ProjectList from "../components/ProjectList";
import { getAllProjects, getAllTechnologies } from "../api";

export default async function Home() {
    const projects = await getAllProjects({ client: false, technologies: [] })
    const technologies = await getAllTechnologies()

    return (
        <main>
            <h1>My Portfolio</h1>
            <p>Welcome to my portfolio! Here are some of the projects I've worked on, you can filter by technology</p>
            <ProjectList projects={projects.results} technologies={technologies.results} />
        </main>
    );
}
