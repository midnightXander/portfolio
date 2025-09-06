import ProjectsWithSearch from '@/components/projects-with-search'
import { getAllProjects } from '@/lib/projects'
import React from 'react'

export default async function ProjectsPage(){
    const projects = await getAllProjects()

    return (
        <section className='pb-24 pt-40'>
            <div className='container mx-auto px-4 max-w-3xl'>
                <header className="mb-12">
                    <h1 className="title">Projects</h1>
                    <p className="text-muted-foreground mt-2">A collection of my projects.</p>
                </header>

                <ProjectsWithSearch projects={projects} />

            </div>

        </section>
    )
}