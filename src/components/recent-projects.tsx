import { getAllProjects } from "@/lib/projects";
import projects from "./projects";
import Link from "next/link";
import Projects from "./projects";


export default async function RecentProjects(){
    const projects = await getAllProjects(4)

    return (
        <section className="pb-24">
            <div>
        <h2 className="title font-bold text-3xl mb-4">Recent Projects</h2>
            <Projects projects={projects} />
            <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
            <span>All Projects</span>
            </Link>
            </div>
            
        </section>
    )
}