import React from "react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import MDXContent from "@/components/mdx-content";
import SEO from "@/components/seo";
import type { Metadata } from "next";

export const generateStaticParams = async () => {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}


export default async function Post({params} : {params: {slug: string}} ){
    const {slug} = await params
    const post = await getPostBySlug(slug)
    console.log('Fetched post for slug:', slug, post)

    if(!post){
        console.log('Post not found:', slug)
        notFound()
    }

    const { metadata, content } = post
    const {title, image, author, publishedAt, summary, tags } = metadata
    console.log('publishedAt:', publishedAt)

    // const {
    //     title: postTitle,
    //     image,
    //     author,
    //     publishedAt,
    //     summary,
    //     tags
    // }: {
    //     title: string;
    //         <SEO
    //             title={postTitle ?? "post"}
    //             description={summary ?? ""}
    //             tags={tags}
    //         />
    // } = metadata
    // console.log('publishedAt:', publishedAt)

    // const pageMetadata: Metadata = {
    //     title: postTitle,
    // }
    
    return (
        <section className="pb-24 pt-32">
            <SEO
                title={title ?? "post"}
                description={summary ?? ""}
                tags={tags}
            />
            <div className="container px-4 mx-auto  max-w-3xl">
                <Link
                href="/posts"
                className="text-sm mb-4 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeftIcon className="inline mr-2 h-4 w-4" />
                    <span>Back to Posts</span>
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