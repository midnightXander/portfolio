'use client'

import { ProjectMetaData } from "@/lib/projects"
import { useState } from "react"
import { Button } from "./ui/button"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import Projects from "./projects"




export default function ProjectsWithSearch({projects} : {projects : ProjectMetaData[]}){
    const [query, setQuery ] = useState('')
    const filtered = projects.filter(project => 
        project.title?.toLowerCase().includes(query.toLowerCase())
    )

    const isFiltered = query.length > 0
    function resetFilter(){
        setQuery('')
    }

    return(
        <div>
            <div className="mb-12 items-center gap-3">
                <Input
                type="text"
                placeholder="Search projects..."
                className="w-full h-9 lg:w-1/2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />

                {isFiltered && (
                    <Button
                    size = 'sm'
                    variant='secondary'
                    onClick={resetFilter}
                    className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4"/>

                    </Button>
                )}
            </div>
            <Projects projects = {filtered} />
        </div>
    )
}