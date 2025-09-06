import { getAllPosts } from "@/lib/posts";
import Posts from "./posts";
import Link from "next/link";


export default async function RecentPosts(){
    const posts = await getAllPosts(4)

    return (
        <section className="pb-8">
            <div>
        <h2 className="title font-bold no-underline text-3xl mb-4">Recent Posts</h2>
            <Posts posts={posts} />

            <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
            <span>All Posts</span>
            </Link>
            </div>
            
        </section>
    )
}