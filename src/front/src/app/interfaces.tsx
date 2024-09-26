export interface TechnologiInterface {
    id: number,
    name: string
}

export interface ProjectInterface {
    id: number,
    description: string,
    name: string,
    technologies: Array<number>,
    technologies_names: Array<TechnologiInterface>
}

export interface WebResponse<T> {
    count: number,
    next: string,
    previous: string,
    results: Array<T>
}