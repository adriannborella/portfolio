import { WebResponse, ProjectInterface, TechnologiInterface } from './interfaces'
import axios from 'axios';

const BACKEND_HOST = 'http://web:8000'

interface getAllProjectsParams {
    technologies?: Array<number>,
    client: boolean
}

export async function getAllProjects({ client = false, ...params }: getAllProjectsParams): Promise<WebResponse<ProjectInterface>> {
    console.log(params)
    const response = await axios.get<WebResponse<ProjectInterface>>(`${client ? '' : BACKEND_HOST}/api/v1/projects`, {
        params: {
            technologies: params.technologies ? params.technologies : []
        },
    });
    return response.data
}

export async function getProject(id: number): Promise<ProjectInterface> {
    const response = await axios.get<ProjectInterface>(`${BACKEND_HOST}/api/v1/projects/${id}`);
    return response.data
}

export async function getAllTechnologies(): Promise<WebResponse<TechnologiInterface>> {
    const res = await fetch(`${BACKEND_HOST}/api/v1/technologies`);
    const data: WebResponse<TechnologiInterface> = await res.json()
    return data
}