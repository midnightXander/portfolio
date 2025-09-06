import Posts from '@/components/posts'
import PostsWithSearch from '@/components/posts-with-search'
import { getAllPosts } from '@/lib/posts'
import React from 'react'

export default async function PostsPage(){
    const posts = await getAllPosts()
    
    return (
        <section className='pb-24 pt-40'>
            <div className='container mx-auto px-4 max-w-3xl'>
                <header className="mb-12">
                    <h1 className="title">Posts</h1>
                    <p className="text-muted-foreground mt-2">A collection of my writings and articles.</p>
                </header>

                <PostsWithSearch posts={posts} />

            </div>

        </section>
    )
}