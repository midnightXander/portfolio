import React from "react";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import MDXContent from "@/components/mdx-content";

export const generateStaticParams = async () => {
    const projects = await getAllProjects()
    return projects.map((project) => ({
        slug: project.slug,
    }))
}


export default async function Project({params} : {params: {slug: string}} ){
    const {slug} = await params
    const project = await getProjectBySlug(slug)
    console.log('Fetched Project for slug:', slug, project)

    if(!project){
        console.log('project not found:', slug)
        notFound()
    }

    const { metadata, content } = project
    const {title, image, author, publishedAt } = metadata
    console.log('publishedAt:', publishedAt)
    
    return (
        <section className="pb-24 pt-32">
            <div className="container px-4 mx-auto  max-w-3xl">
                <Link
                href="/projects"
                className="text-sm mb-4 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeftIcon className="inline mr-2 h-4 w-4" />
                    <span>Back to projects</span>
                </Link>

                {image && ( 
                <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                    <Image 
                    src = {image}
                    alt={title || ''}
                    className="object-cover"
                    fill
                    />
                </div>    
                )}

                <header>
                    <h1 className="title">{title}</h1>
                    <p className="mt-4 text-xs text-muted-foreground">
                        {author} / {formatDate(publishedAt ?? '')}
                    </p>
                </header>

                <main className="prose mt-16 dark:prose-invert">
                    <MDXContent source={content} />
                </main>

            </div>

        </section>
    )
}