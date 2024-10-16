import { WebResponse, ProjectInterface, TechnologiInterface } from './interfaces'
import axios from 'axios';

interface getAllProjectsParams {
    technologies?: Array<number>,
    client: boolean
}

export async function getAllProjects({ ...params }: getAllProjectsParams): Promise<WebResponse<ProjectInterface>> {
    const response = await axios.get<WebResponse<ProjectInterface>>(`/api/v1/projects`, {
        params: {
            technologies: params.technologies ? params.technologies : []
        },
    });
    return response.data
}

export async function getProject(id: number): Promise<ProjectInterface> {
    const response = await axios.get<ProjectInterface>(`/api/v1/projects/${id}`);
    return response.data
}

export async function getAllTechnologies(): Promise<WebResponse<TechnologiInterface>> {
    const res = await fetch(`/api/v1/technologies`);
    const data: WebResponse<TechnologiInterface> = await res.json()
    return data
}