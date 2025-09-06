import Link from "next/link";
import Image from "next/image";
import { ProjectMetaData } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

export default function Projects({projects} : {projects: ProjectMetaData[]}){
    return (
        <section className="pb-8">
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {projects.map((project) => (
                        <li key={project.slug} className="group relative overflow-hidden rounded-lg  hover:shadow-lg hover:shadow-accent/10">
                            <Link
                                href={`/projects/${project.slug}`}>
                                {project.image && (
                                    <div className="h-72 w-full rounded-lg bg-muted overflow-hidden sm:mb-0 sm:h-60 group-hover:scale-105 transition-transform relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title || ''}
                                            className="object-cover p-2 object-center rounded-lg transition-transform"
                                            fill
                                        />
                                    </div>
                                )}
                                <div className="absolute inset-[5px] rounded-lg bg-background/70">

                                <div className="absolute inset-x-0 rounded-lg bottom-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent py-2 px-6  transition-transform group-hover:translate-y-0">
                                    <h2 className="title text-3xl font-bold line-clamp-1 no-underline">{project.title}</h2>
                                    <p className="mt-1 line-clamp-2 text-sm  font-light text-muted-foreground" >
                                        {project.summary}
                                    </p>
                                    {project.publishedAt && (
                                    <p className="text-xs font-light text-muted-foreground">
                                        {formatDate('2025-06-01')}
                                    </p>
                                 )}
                                </div>
                            </div>
                                 
                        </Link>
                        </li>
                    ))}
            </ul>
        </section>
    )}