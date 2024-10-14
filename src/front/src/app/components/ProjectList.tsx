"use client"

import { useEffect, useState } from "react";
import { ProjectInterface, TechnologiInterface } from "../interfaces"
import { ProjectCard } from "./ProjectCard"
import { getAllProjects, getAllTechnologies } from "../api"

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProjectList() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [technologies, setTechnologies] = useState<Array<TechnologiInterface>>([])
    const [projects, setProjects] = useState<Array<ProjectInterface>>([])
    const [selectedTechnologies,] = useState<Array<number>>([]);
    const [filteredProjects, setFilteredProjects] = useState<Array<ProjectInterface>>([]);

    // Function to handle clicking on a technology pill (toggle selection)
    // const handleTechnologyClick = (techId: number) => {
    //     if (selectedTechnologies.includes(techId)) {
    //         // If already selected, deselect it
    //         setSelectedTechnologies(selectedTechnologies.filter((id) => id !== techId));
    //     } else {
    //         // Otherwise, add it to the selected list
    //         setSelectedTechnologies([...selectedTechnologies, techId]);
    //     }
    // };

    useEffect(() => {
        const fetchTechnologies = async () => {
            // Assume you're making a real API request here to get projects by technologies
            const response = await getAllTechnologies();
            setTechnologies(response.results);
        };

        const fetchProjects = async () => {
            // Assume you're making a real API request here to get projects by technologies
            const response = await getAllProjects({ client: true, technologies: [] });
            setProjects(response.results);
        };

        fetchTechnologies();
        fetchProjects();
    }, [])


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
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Technologies</h3>

                                <DisclosurePanel className="pt-6">
                                    <div className="space-y-6">
                                        {technologies.map((tech, optionIdx) => (
                                            <div key={tech.id} className="flex items-center">
                                                <input
                                                    defaultValue={tech.name}
                                                    defaultChecked={true}
                                                    id={`filter-mobile-${tech.id}-${optionIdx}`}
                                                    name={`${tech.id}[]`}
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                    htmlFor={`filter-mobile-${tech.id}-${optionIdx}`}
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {tech.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </DisclosurePanel>

                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Projects</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="projects-heading" className="pb-24 pt-6">
                        <h2 id="projects-heading" className="sr-only">
                            Projects
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                {technologies.map((tech, optionIdx) => (
                                    <div key={tech.id} className="flex items-center">
                                        <input
                                            defaultValue={tech.name}
                                            defaultChecked={true}
                                            id={`filter-mobile-${tech.id}-${optionIdx}`}
                                            name={`${tech.id}[]`}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor={`filter-mobile-${tech.id}-${optionIdx}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                        >
                                            {tech.name}
                                        </label>
                                    </div>
                                ))}
                            </form>
                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                    {filteredProjects.map((project) => {
                                        return <ProjectCard key={project.id} project={project} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}